import Link from "next/link";

export const COLUMNS = [
  {
    Header: "اسم الدورة",
    accessor: "courseName",
    Cell: ({ row }) => (
      <div className="course-name">
        <p>{row.original.courseName}</p>
        <div className="[&>*]:!text-[10px] hidden sm:flex">
          <span
            className={`${
              row.original.isOnline == "أونلاين" ? "online" : "in-person"
            }`}
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.99996 8.33341C6.84091 8.33341 8.33329 6.84103 8.33329 5.00008C8.33329 3.15913 6.84091 1.66675 4.99996 1.66675C3.15901 1.66675 1.66663 3.15913 1.66663 5.00008C1.66663 6.84103 3.15901 8.33341 4.99996 8.33341Z"
                fill="currentColor"
              />
            </svg>
            {row.original.isOnline}
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
          <span
            className={`${
              row.original.isOnline == "أونلاين" ? "online" : "in-person"
            }`}
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.99996 8.33341C6.84091 8.33341 8.33329 6.84103 8.33329 5.00008C8.33329 3.15913 6.84091 1.66675 4.99996 1.66675C3.15901 1.66675 1.66663 3.15913 1.66663 5.00008C1.66663 6.84103 3.15901 8.33341 4.99996 8.33341Z"
                fill="currentColor"
              />
            </svg>
            {row.original.isOnline}
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
          <button onClick={() => handleOuterRegisterCourse(user, dispatch)}>
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