import React from 'react'
import AdminLayout from '../Layout/AdminLayout'
import BreadcrumbComp from '../../components/Breadcrumb/Breadcrumb'
import CategoryForm from './CategoryForm'

const Category = () => {
    return (
        <div>
            <AdminLayout>
                <BreadcrumbComp page="Category"/>
                
                <div className="content">
                    <div className="category-form">
                        <CategoryForm />
                    </div>
                    <div className="cat-list"></div>
                </div>
            </AdminLayout>
        </div>
    )
}

export default Category
