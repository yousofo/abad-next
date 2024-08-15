//1st filter based on categories + attendance + hadaf
export function filteredDataFn(
  data,
  { activeCategory, isCourseOnline, isCourseHadaf }
) {
  console.log("categories + attendance + hadaf Filter");
  return data.filter((e) => {
    if (activeCategory.includes("all")) {
      //online and hadaf filter
      if (isCourseOnline == "online") {
        if (isCourseHadaf) {
          return e.isOnline == "أونلاين" && e.hadaf?.length > 1;
        } else {
          return e.isOnline == "أونلاين";
        }
      } else if (isCourseOnline == "attendance") {
        if (isCourseHadaf) {
          return !(e.isOnline == "أونلاين") && e.hadaf?.length > 1;
        } else {
          return !(e.isOnline == "أونلاين");
        }
      } else if (isCourseHadaf) {
        return e.hadaf?.length > 1;
      } else {
        return true;
      }
    } else {
      //filter courses categories
      const isCategory = activeCategory.includes(e.categoryId);
      if (isCourseOnline == "online") {
        if (isCourseHadaf) {
          return e.isOnline && isCategory && e.hadaf;
        } else {
          return e.isOnline && isCategory;
        }
      } else if (isCourseOnline == "attendance") {
        if (isCourseHadaf) {
          return !(e.isOnline == "أونلاين") && isCategory && e.hadaf;
        } else {
          return !(e.isOnline == "أونلاين") && isCategory;
        }
      } else if (isCourseHadaf) {
        return e.hadaf && isCategory;
      } else {
        return isCategory;
      }
    }
  });
}
// const filteredData = useMemo(() => {
//   console.log("categories + attendance + hadaf Filter");
//   return data.filter((e) => {
//     if (activeCategory.includes("all")) {
//       //online and hadaf filter
//       if (isCourseOnline == "online") {
//         if (isCourseHadaf) {
//           return e.isOnline == "أونلاين" && e.hadaf?.length > 1;
//         } else {
//           return e.isOnline == "أونلاين";
//         }
//       } else if (isCourseOnline == "attendance") {
//         if (isCourseHadaf) {
//           return !(e.isOnline == "أونلاين") && e.hadaf?.length > 1;
//         } else {
//           return !(e.isOnline == "أونلاين");
//         }
//       } else if (isCourseHadaf) {
//         return e.hadaf?.length > 1;
//       } else {
//         return true;
//       }
//     } else {
//       //filter courses categories
//       const isCategory = activeCategory.includes(e.categoryId);
//       if (isCourseOnline == "online") {
//         if (isCourseHadaf) {
//           return e.isOnline && isCategory && e.hadaf;
//         } else {
//           return e.isOnline && isCategory;
//         }
//       } else if (isCourseOnline == "attendance") {
//         if (isCourseHadaf) {
//           return !(e.isOnline == "أونلاين") && isCategory && e.hadaf;
//         } else {
//           return !(e.isOnline == "أونلاين") && isCategory;
//         }
//       } else if (isCourseHadaf) {
//         return e.hadaf && isCategory;
//       } else {
//         return isCategory;
//       }
//     }
//   });
// }, [activeCategory, data.length, isCourseHadaf, isCourseOnline]);

/*2nd filter based on price after first filter*/
export function priceFilterFn(filteredData, minMax) {
  console.log("filter price");
  return filteredData.filter(
    (e) => e.price >= minMax.min && e.price <= minMax.max
  );
}
// const priceFilter = useMemo(() => {
//   console.log("filter price");
//   return filteredData.filter(
//     (e) => e.price >= minMax.min && e.price <= minMax.max
//   );
// }, [minMax.min, minMax.max, filteredData, isCourseOnline]);

/*3rd filter latest | newest*/
export function sortedDataFn(priceFilter, sortOrder) {
  console.log("latest Filter");
  return [...priceFilter].sort((a, b) => {
    if (sortOrder === "latest") {
      return new Date(b.startDate) - new Date(a.startDate);
    } else {
      return new Date(a.startDate) - new Date(b.startDate);
    }
  });
}
// const sortedData = useMemo(() => {
//   console.log("latest Filter");
//   return [...priceFilter].sort((a, b) => {
//     if (sortOrder === "latest") {
//       return new Date(b.startDate) - new Date(a.startDate);
//     } else {
//       return new Date(a.startDate) - new Date(b.startDate);
//     }
//   });
// }, [priceFilter, sortOrder]);
