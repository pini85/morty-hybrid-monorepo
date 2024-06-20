import Title from "@/components/UI/Title";
const Admin = () => {
  return (
    <div>
      <Title>Admin Dashboard</Title>

      <h3 style={{ textAlign: "center" }}>
        Only Admins are allowed to see this
      </h3>
    </div>
  );
};
export default Admin;
