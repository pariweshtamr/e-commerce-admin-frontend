import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../Layout/AdminLayout";
import { fetchUser } from "../admin-auth-slice/userAction";
import {
  AdminProfileForm,
  AdminPasswordResetForm,
} from "../../components/AdminProfile/AdminProfileForm";

const AdminProfile = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    if (!userInfo._id) dispatch(fetchUser());
  }, [dispatch]);
  return (
    <div>
      <AdminLayout>
        <AdminProfileForm />
        <hr />
        <div>Update Password</div>
        <AdminPasswordResetForm />
      </AdminLayout>
    </div>
  );
};

export default AdminProfile;
