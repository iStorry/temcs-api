interface CategoriesData {
    _isNew:         boolean;
    _id:            string;
    createdAt:      Date;
    updatedAt:      Date;
    showcase:       string;
    name:           string;
    description:    string;
    outstanding:    boolean;
    image:          string;
    status:         boolean;
    order:          number;
    showPagination: boolean;
}

interface CategoriesResult {
    status:     string;
    returnData: CategoriesData[];
}

export { CategoriesResult, CategoriesData };
