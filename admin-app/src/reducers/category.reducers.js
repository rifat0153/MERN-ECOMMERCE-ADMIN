import { categoryConstants } from "../actions/constants"

const initialState = {
    categories: [],
    loading: false,
    error: null
}


const buildNewCategories = (pId, categories, category) => {
    
    let myCategories = []
    
    for(let cat of categories){

        if( cat._id == pId){
            myCategories.push({
                ...cat,
                clildren: cat.clildren && cat.clildren.length > 0 ? buildNewCategories(pId, [...cat.clildren, {
                    _id: category._id,
                    name: category.name,
                    slug: category.slug,
                    parentId: category.parentId,
                    clildren: category.clildren,

                }], category) : []
            })
        }else{
            myCategories.push({
                ...cat,
                clildren: cat.clildren && cat.clildren.length > 0 ? buildNewCategories(pId, cat.clildren, category) : []
            })
        }

        
    }

    return myCategories;
}




export default ( state = initialState, action ) => {
    switch(action.type){
        case categoryConstants.GET_ALL_CATEGORY_SUCCESS:
            state = {
                ...state,
                categories: action.payload.categories
            }
            break;
            case categoryConstants.ADD_NEW_CATEGORY_REQUEST:
                state = {
                    ...state,
                    loading: true
                }
                break;
            case categoryConstants.ADD_NEW_CATEGORY_SUCCESS:
                const category = action.payload.category;
                const updatedCategories = buildNewCategories(category.parentId, state.categories, category);
                console.log('updated categoires', updatedCategories);
                
                state = {
                    ...state,
                    categories: updatedCategories,
                    loading: false,
                }
                break;
            case categoryConstants.ADD_NEW_CATEGORY_FAILURE:
                state = {
                    ...initialState,
                    loading: false,
                    error: action.payload.error
                }
                break;
    }

    return state;
}