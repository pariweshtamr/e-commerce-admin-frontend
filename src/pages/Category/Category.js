import React from 'react'
import AdminLayout from '../Layout/AdminLayout'
import BreadcrumbComp from '../../components/Breadcrumb/Breadcrumb'
import CategoryForm from '../../components/CategoryForm/CategoryForm'
import CategoryList from '../../components/CategoryList/CategoryList'

const Category = () => {
    return (
        <div>
            <AdminLayout>
                <BreadcrumbComp page="Category"/>
                
                <div className="content">
                    <div className="category-form">
                    <h2>Add new category</h2>
                        <CategoryForm />
                    </div>
                    <hr />
                    <div className="category-list">
                        <h2>Category List</h2>
                        <CategoryList />
                    </div>
                </div>
            </AdminLayout>
        </div>
    )
}

export default Category
