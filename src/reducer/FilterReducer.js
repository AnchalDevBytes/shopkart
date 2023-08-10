const FilterReducer = (state, action) => {
    
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":

    let priceArr = action.payload.map((currElm) => currElm.price);
    // console.log(priceArr);
    // console.log(Math.max.apply(null, priceArr));

    // let MaxPrice = priceArr.reduce((initialVal, currVal) => Math.max(initialVal, currVal),0);
    // console.log(MaxPrice);

    let MaxPrice = Math.max(...priceArr);
    // console.log(MaxPrice);

      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters:{ ...state.filter, MaxPrice, price:MaxPrice},
      };
    case "SET_GRIDVIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LISTVIEW":
      return {
        ...state,
        grid_view: false,
      };
    case "GET_SORT_VALUE":
      // let userSortValue = document.getElementById("sort");
      // let sort_value = userSortValue.options[userSortValue.selectedIndex].value
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      // let tempSortProduct =[...action.payload];

      const { filter_products, sorting_value } = state;
      let tempSortProduct = [...filter_products];

      const sortingProducts = (a, b) => {
        if (sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }
        if (sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }
        if (sorting_value === "highest") {
          return b.price - a.price;
        }
      };

      newSortData = tempSortProduct.sort(sortingProducts);

      return {
        ...state,
        filter_products: newSortData,
      };

    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProduct = [...all_products];
      const { text, category, company, colors, price } = state.filters;

      if (text) {
        tempFilterProduct = tempFilterProduct.filter((currElm) => {
          return currElm.name.toLowerCase().includes(text);
        });
      }
      if(category !== "all") {
        tempFilterProduct = tempFilterProduct.filter((currElm) => {
            return currElm?.category?.toLowerCase() === category?.toLowerCase();
        })
      }
      if(company !== "all") {
        tempFilterProduct = tempFilterProduct.filter((currElm) => {
            return currElm?.company?.toLowerCase() === company?.toLowerCase();
        })
      }

      if(colors !== "all") {
        tempFilterProduct = tempFilterProduct.filter((currElm) => {
          return currElm.colors.includes(colors)
        })
      }
      if(price === 0){
        tempFilterProduct = tempFilterProduct.filter((currElm) => currElm.price == price)
      }
      else{
        tempFilterProduct = tempFilterProduct.filter((currElm) => currElm.price <= price)
      }

      return {
        ...state,
        filter_products: tempFilterProduct,
      };

    case "RESET_FILTER":
      return {
        ...state,
        filters:{
          ...state.filters,
          text :"",
          category:"all",
          company:"all",
          colors:"all",
          MaxPrice:0,
          MinPrice:state.filters.MinPrice,
          price:state.filters.MaxPrice,
      }
      }  

    default:
      return state;
  }
};

export default FilterReducer;
