"use client";
// import "./courses.dev.css";
import React, { act, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
// redux tool kit
import { useDispatch, useSelector } from "react-redux";
import { setHomeCourses } from "../../GlobalState/Features/fetchedDataSlice";
import { toggleCards } from "../../GlobalState/Features/coursesFilterSlice";
// components
import CourseRow from "../../shared/tables/CourseRow";
import CourseCard from "../../shared/tables/CourseCard";
import MultiRangeSlider from "./dualSwiper/MultiRangeSlider";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import SeachFilter from "./SeachFilter";

async function fetchHomeCourse() {
  try {
    const request = await fetch("/api/allCourses", {
      method: "GET",
      headers: {
        "Cache-Control":
          "no-store, no-cache, must-revalidate, proxy-revalidate",
        Pragma: "no-cache",
        Expires: "0",
        "Surrogate-Control": "no-store",
      },
    });
    const data = await request.json();
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
}
async function fetchCoursesCategories() {
  try {
    const request = await fetch("/api/coursesCategories", {
      method: "GET",
      headers: {
        "Cache-Control":
          "no-store, no-cache, must-revalidate, proxy-revalidate",
        Pragma: "no-cache",
        Expires: "0",
        "Surrogate-Control": "no-store",
      },
    });
    const data = await request.json();
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
}

const COLUMNS = [
  {
    Header: "اسم الدورة",
    accessor: "courseName",
    Cell: ({ row }) => (
      <div className="course-name">
        <p>{row.original.courseName}</p>
        <div className="[&>*]:!text-[10px] hidden sm:flex">
          <span className="text-[#DF2121] ">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.99996 8.33341C6.84091 8.33341 8.33329 6.84103 8.33329 5.00008C8.33329 3.15913 6.84091 1.66675 4.99996 1.66675C3.15901 1.66675 1.66663 3.15913 1.66663 5.00008C1.66663 6.84103 3.15901 8.33341 4.99996 8.33341Z"
                fill="currentColor"
              />
            </svg>
            {row.original.isOnline ? row.original.isOnline : "حضوري"}
          </span>
          {row.original.hadaf && (
            <span>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.99996 8.33341C6.84091 8.33341 8.33329 6.84103 8.33329 5.00008C8.33329 3.15913 6.84091 1.66675 4.99996 1.66675C3.15901 1.66675 1.66663 3.15913 1.66663 5.00008C1.66663 6.84103 3.15901 8.33341 4.99996 8.33341Z"
                  fill="currentColor"
                />
              </svg>
              مدعومة من هدف
            </span>
          )}
        </div>
      </div>
    ),
  },
  {
    Header: "تاريخ بداية الدورة",
    accessor: "startDate",
    Cell: ({ row }) => (
      <div className="course-start-date whitespace-nowrap flex items-center gap-1">
        <span className="sm:hidden">بداية الدورة</span>
        <span className="sm:hidden">:</span>
        <span>{row.original.startDate.split("-").join("/")}</span>
      </div>
    ),
  },
  {
    Header: "وقت بداية الدورة",
    accessor: "formattedTimeStart",
    Cell: ({ row }) => (
      <div className="flex items-center gap-1">
        <span className="sm:hidden">التوقيت</span>
        <span className="sm:hidden">:</span>
        <span>
          <span>من</span>
          &nbsp;
          <span>
            {row.original.formattedTimeStart.substring(1) +
              " " +
              row.original.formattedTimeStart[0]}
          </span>
          &nbsp;
          <span>حتي</span>
          &nbsp;
          <span>
            {row.original.formattedTimeEnd.substring(1) +
              " " +
              row.original.formattedTimeEnd[0]}
          </span>
        </span>
      </div>
    ),
  },
  {
    Header: "الاجراءات",
    accessor: "",
    Cell: ({ row }) => (
      <div className="">
        <div className="my-3  sm:hidden [&>*]:!text-[10px] [&>span]:flex [&>span]:items-center [&>span]:gap-1 flex items-center gap-3">
          <span className="text-[#DF2121] ">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.99996 8.33341C6.84091 8.33341 8.33329 6.84103 8.33329 5.00008C8.33329 3.15913 6.84091 1.66675 4.99996 1.66675C3.15901 1.66675 1.66663 3.15913 1.66663 5.00008C1.66663 6.84103 3.15901 8.33341 4.99996 8.33341Z"
                fill="currentColor"
              />
            </svg>
            {row.original.isOnline ? row.original.isOnline : "حضوري"}
          </span>
          {row.original.hadaf && (
            <span className="text-[#1b39a6]">
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.99996 8.33341C6.84091 8.33341 8.33329 6.84103 8.33329 5.00008C8.33329 3.15913 6.84091 1.66675 4.99996 1.66675C3.15901 1.66675 1.66663 3.15913 1.66663 5.00008C1.66663 6.84103 3.15901 8.33341 4.99996 8.33341Z"
                  fill="currentColor"
                />
              </svg>
              مدعومة من هدف
            </span>
          )}
        </div>
        <div className="btns">
          <Link href={`/courses/${row.original.token}`}>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={16}
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M10.8866 7.99995C10.8866 9.31995 9.81995 10.3866 8.49995 10.3866C7.17995 10.3866 6.11328 9.31995 6.11328 7.99995C6.11328 6.67995 7.17995 5.61328 8.49995 5.61328C9.81995 5.61328 10.8866 6.67995 10.8866 7.99995Z"
                  fill="#3F3E43"
                  stroke="#3F3E43"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.4999 13.5131C10.8532 13.5131 13.0466 12.1264 14.5732 9.7264C15.1732 8.7864 15.1732 7.2064 14.5732 6.2664C13.0466 3.8664 10.8532 2.47974 8.4999 2.47974C6.14656 2.47974 3.95323 3.8664 2.42656 6.2664C1.82656 7.2064 1.82656 8.7864 2.42656 9.7264C3.95323 12.1264 6.14656 13.5131 8.4999 13.5131Z"
                  stroke="#3F3E43"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              التفاصيل
            </button>
          </Link>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={14}
              height={11}
              viewBox="0 0 14 11"
              fill="currentColor"
            >
              <path d="M6.66667 7.33333H5.33333C4.23973 7.33292 3.16682 7.63143 2.23058 8.1966C1.29435 8.76178 0.530401 9.57211 0.0213343 10.54C0.00702532 10.3604 -9.15218e-05 10.1802 8.88408e-07 10C8.88408e-07 6.318 2.98467 3.33333 6.66667 3.33333V0L13.3333 5.33333L6.66667 10.6667V7.33333Z" />
            </svg>
            تسجيل
          </button>
        </div>
        
      </div>
    ),
  },
];

// main component
const CoursesComponent = () => {
  const [data, setData] = useState([]);
  const allCatRef = useRef(null);
  const [coursesCategories, setCoursesCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(["all"]);
  const [extraFilter, setExtraFilter] = useState([]);
  const [isCourseOnline, setIsCourseOnline] = useState("");
  const [isCourseHadaf, setIsCourseHadaf] = useState(false);
  const isCards = useSelector((store) => store.coursesFilter.isCards);
  const dispatch = useDispatch();

  function handleCoursesPreviewMode() {
    dispatch(toggleCards());
  }

  const [sortOrder, setSortOrder] = useState("latest"); // or 'newest'
  const tableColumns = useMemo(() => COLUMNS, []);
  // const tableData = useMemo(() => data, [data.length]);

  const filteredData = useMemo(
    () =>
      data.filter((e) => {
        if (activeCategory.includes("all")) {
          if (isCourseOnline == "online") {
            if (isCourseHadaf) {
              console.log("here");
              return e.isOnline.length > 1 && e.hadaf?.length > 1;
            } else {
              return e.isOnline.length > 1;
            }
          } else if (isCourseOnline) {
            if (isCourseHadaf) {
              return !(e.isOnline.length > 1) && e.hadaf?.length > 1;
            } else {
              return !(e.isOnline.length > 1);
            }
          } else if (isCourseHadaf) {
            console.log("in hadaf");
            return e.hadaf?.length > 1;
          } else {
            return true;
          }
        } else {
          const isCategory = activeCategory.includes(e.categoryId);
          if (isCourseOnline == "online") {
            if (isCourseHadaf) {
              return e.isOnline && isCategory && e.hadaf;
            } else {
              return e.isOnline && isCategory;
            }
          } else if (isCourseOnline) {
            if (isCourseHadaf) {
              return !e.isOnline && isCategory && e.hadaf;
            } else {
              return !e.isOnline && isCategory;
            }
          } else if (isCourseHadaf) {
            return e.hadaf && isCategory;
          } else {
            return isCategory;
          }
        }
      }),
    [activeCategory, data.length, isCourseHadaf, isCourseOnline]
  );

  const sortedData = React.useMemo(() => {
    return [...filteredData].sort((a, b) => {
      if (sortOrder === "latest") {
        return new Date(b.startDate) - new Date(a.startDate);
      } else {
        return new Date(a.startDate) - new Date(b.startDate);
      }
    });
  }, [filteredData.length, sortOrder]);

  const tableInstance = useTable(
    { columns: tableColumns, data: sortedData },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    setGlobalFilter,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    prepareRow,
    state,
    setPageSize,
    pageOptions,
  } = tableInstance;

  const { globalFilter } = state;
  function handleChecked(e, code) {
    if (e.target.checked == true) {
      setActiveCategory((pre) => [...pre, code]);
    } else {
      setActiveCategory((pre) => pre.filter((ele) => ele != code));
    }
  }
  useEffect(() => {
    allCatRef.current.checked = true;
    fetchCoursesCategories()
      .then((e) => {
        setCoursesCategories(e);
      })
      .catch((e) => {
        console.log("home courses");
        console.log(e);
      });
    fetchHomeCourse()
      .then((e) => {
        setData(e);
        setPageSize(6);
      })
      .catch((e) => {
        console.log("home courses");
        console.log(e);
      });
  }, []);
  return (
    <>
      {/* SERACH FILTER start */}
      <SeachFilter
        hiden={true}
        searchFilter={globalFilter}
        setSearchFilter={setGlobalFilter}
      />
      <div className="flex flex-col gap-8 lg:gap-4 lg:flex-row">
        <form className="search-filter bg-white h-fit w-full lg:w-max mx-auto abad-shadow p-5 flex flex-col gap-4 rounded-lg">
          <div className="flex items-center justify-between gap-12 pb-3 border-b border-b-[#D8D1E2]">
            <h3 className="font-bold">تصفية</h3>
            <button type="reset" className="text-xs font-bold">
              إعادة تعيين التصفية
            </button>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-24 lg:gap-4 lg:flex-col ">
            <div className="flex flex-col gap-[10px]">
              <h4 className="font-bold text-xs ">الفئة</h4>
              <div
                className={`courses-form-filter ${
                  activeCategory.includes("all") ? "active" : ""
                }`}
              >
                <input
                  onClick={(ev) => handleChecked(ev, "all")}
                  type="checkbox"
                  name="filterAll"
                  id="filterAll"
                  ref={allCatRef}
                />
                <label htmlFor="filterAll">الكل</label>
              </div>
              {coursesCategories.map((e, i) => (
                <div
                  key={i}
                  className={`courses-form-filter ${
                    activeCategory == e.code ? "active" : ""
                  }`}
                >
                  <input
                    onClick={(ev) => handleChecked(ev, e.code)}
                    type="checkbox"
                    name=""
                    id={`${e.arabicName}`}
                  />
                  <label htmlFor={`${e.arabicName}`}>{e.arabicName}</label>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <div className="max-w-64">
                <h4 className="font-bold text-xs">السعر</h4>
                <MultiRangeSlider
                  min={0}
                  max={1000}
                  onChange={({ min, max }) =>
                    console.log(`min = ${min}, max = ${max}`)
                  }
                />
              </div>
              <div className="flex flex-col gap-[10px] [&>div]:flex [&>div]:items-center [&>div]:gap-1">
                <h4 className="font-bold text-xs ">الحضور</h4>
                <div>
                  <input
                    onClick={(ev) => setIsCourseOnline("attendance")}
                    type="radio"
                    name="isOnline"
                    id="filterAttendence"
                  />
                  <label htmlFor="filterAttendence">حضوري</label>
                </div>
                <div>
                  <input
                    onClick={(ev) => setIsCourseOnline("online")}
                    type="radio"
                    name="isOnline"
                    id="filterOnline"
                  />
                  <label htmlFor="filterOnline">اونلاين</label>
                </div>
              </div>
              <div className="flex flex-col gap-[10px]">
                <h4 className="font-bold text-xs ">شهادات مدعومة</h4>
                <div className="flex items-center gap-1">
                  <input
                    onClick={(ev) =>
                      setIsCourseHadaf(ev.target.checked ? "hadaf" : "")
                    }
                    type="checkbox"
                    name=""
                    id="filterGoal"
                  />
                  <label htmlFor="filterGoal">هدف</label>
                </div>
              </div>
            </div>
          </div>
        </form>
        {/* SERACH FILTER end */}
        <div className="flex flex-1 flex-col items-center gap-8 courses">
          {/* courses preview options */}
          <div className="flex px-6 items-center w-full gap-8 courses-preview-mode">
            <div className="flex flex-col md:flex-row flex-1 justify-between lg:items-center">
              <h4 className="md:text-lg font-bold text-[#9891A3]">
                <span>عرض</span>
                &nbsp;
                <span>:</span>
                &nbsp;
                <span>{sortedData.length}</span>
                &nbsp;
                <span>نتيجة</span>
              </h4>
              <div className="flex items-center">
                <h4 className="text-xs md:text-lg font-bold text-[#9891A3]">
                  ترتيب حسب :
                </h4>
                <select
                  className="text-[#151318] text-xs md:text-base font-bold w-auto"
                  name=""
                  id=""
                  onChange={(e) => {
                    console.log(e.target.value);
                    setSortOrder(e.target.value);
                  }}
                >
                  <option value="latest">الأحدث</option>
                  <option value="oldest">الأقدم</option>
                </select>
              </div>
            </div>
            <ul>
              <li
                data-mode="rows"
                onClick={handleCoursesPreviewMode}
                className={`${
                  !isCards && "active"
                } courses-preview-mode courses-preview-rows `}
              >
                <svg
                  width={22}
                  height={14}
                  viewBox="0 0 22 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 1H15M9 9H15M9 5H21M9 13H21M3 5C1.89543 5 1 4.10457 1 3C1 1.89543 1.89543 1 3 1C4.10457 1 5 1.89543 5 3C5 4.10457 4.10457 5 3 5ZM3 13C1.89543 13 1 12.1046 1 11C1 9.89543 1.89543 9 3 9C4.10457 9 5 9.89543 5 11C5 12.1046 4.10457 13 3 13Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </li>
              <li
                onClick={handleCoursesPreviewMode}
                data-mode="cards"
                className={`${
                  isCards && "active"
                } courses-preview-mode courses-preview-rows`}
              >
                <svg
                  width={22}
                  height={22}
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 3C1 1.89543 1.89543 1 3 1H7C8.10457 1 9 1.89543 9 3V7C9 8.10457 8.10457 9 7 9H3C1.89543 9 1 8.10457 1 7V3Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13 3C13 1.89543 13.8954 1 15 1H19C20.1046 1 21 1.89543 21 3V7C21 8.10457 20.1046 9 19 9H15C13.8954 9 13 8.10457 13 7V3Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1 15C1 13.8954 1.89543 13 3 13H7C8.10457 13 9 13.8954 9 15V19C9 20.1046 8.10457 21 7 21H3C1.89543 21 1 20.1046 1 19V15Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13 15C13 13.8954 13.8954 13 15 13H19C20.1046 13 21 13.8954 21 15V19C21 20.1046 20.1046 21 19 21H15C13.8954 21 13 20.1046 13 19V15Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>
            </ul>
          </div>
          {/* courses filter */}

          {/* courses table ROWS MODE */}
          {/* <table
          style={{ display: `${isCards ? "none" : "table"}` }}
          className="courses-rows w-full px-3 md:px-6 "
        >
          <thead>
            <tr className="abad-shadow rounded-lg hidden md:table-row">
              <th className="text-start">اسم الدورة</th>
              <th className="text-start">تاريخ بداية الدورة</th>
              <th className="text-start">وقت بداية الدورة</th>
              <th className="text-start">الاجراءات</th>
            </tr>
          </thead>
          <tbody>
            {activeCategory == "all" && Array.isArray(data)
              ? data.map((e, i) => <CourseRow2 data={e} key={i} index={i} />)
              : data
                  ?.filter((e) => e.categoryId == activeCategory)
                  .map((e, i) => <CourseRow2 data={e} key={i} index={i} />)}
          </tbody>
        </table> */}
          <table
            {...getTableProps()}
            style={{ display: `${isCards ? "none" : "table"}` }}
            className="courses-rows w-full"
          >
            <thead className="abad-shadow rounded-lg hidden md:table-row-group">
              {headerGroups.map((headerGroup, i) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={i}>
                  {headerGroup.headers.map((column, i) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className="text-start bg-[#1D2A96] !text-white"
                      key={i}
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row, i) => {
                prepareRow(row);
                return (
                  <tr
                    {...row.getRowProps()}
                    className="shadow rounded-lg"
                    key={i}
                  >
                    {row.cells.map((cell, i) => {
                      return (
                        <td {...cell.getCellProps()} key={i}>
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* courses table CARDS MODE */}
          {/* <div
            style={{ display: `${!isCards ? "none" : "grid"}` }}
            className={` courses-cards `}
          >
            {activeCategory == "all" && Array.isArray(sortedData)
              ? sortedData.map((e, i) => (
                  <Link key={i} href={`/courses/${1}`}>
                    <CourseCard data={e} index={i} />
                  </Link>
                ))
              : sortedData
                  ?.filter((e) => e.categoryId == activeCategory)
                  .map((e, i) => (
                    <Link key={i} href={`/courses/${1}`}>
                      <CourseCard data={e} index={i} />
                    </Link>
                  ))}
          </div> */}
          <div
            style={{ display: `${!isCards ? "none" : "grid"}` }}
            className="courses-cards"
            // className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {page.map((row) => {
              prepareRow(row);
              const { courseName, formattedTimeStart, startDate } =
                row.original;
              return (
                <Link key={row.id} href={`/courses/${row.original.token}`}>
                  <CourseCard data={row.original} />
                </Link>
              );
            })}
          </div>
          {/* TABLE PAGINATION */}
          <div>
            <div>
              <bdi>
                <span>الصفحة</span>
                &nbsp;
                <span>{state.pageIndex + 1}</span>
                &nbsp;
                <span>من</span>
                &nbsp;
                <span>{pageOptions.length}</span>
              </bdi>
            </div>
            <button onClick={nextPage} disabled={!canNextPage}>
              التالي
            </button>
            <button onClick={previousPage} disabled={!canPreviousPage}>
              السابق
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesComponent;
