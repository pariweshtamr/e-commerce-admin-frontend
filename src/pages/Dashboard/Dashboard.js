import { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import CustomCard from '../../components/CustomCard/CustomCard'
import AdminLayout from '../Layout/AdminLayout'
import { fetchProducts } from '../Product/ProductAction'

const Dashboard = () => {
  const dispatch = useDispatch()
  const { productList } = useSelector((state) => state.product)

  useEffect(() => {
    !productList.length && dispatch(fetchProducts())
  }, [dispatch, productList])

  const inActiveProduct = productList.filter((row) => !row.status)

  return (
    <div>
      <AdminLayout>
        <div className="dashboard-page">
          <Row>
            <Col md="6">
              {' '}
              <CustomCard icon="fas fa-box-open">
                Total Products: {productList?.length}{' '}
                <i className="fas fa-arrow-up text-success"></i>
              </CustomCard>
            </Col>
            <Col md="6">
              {' '}
              <CustomCard icon="fas fa-box">
                Inactive products: {inActiveProduct?.length}{' '}
                <i className="fas fa-arrow-down text-danger"></i>
              </CustomCard>
            </Col>
          </Row>
        </div>
      </AdminLayout>
    </div>
  )
}

export default Dashboard
