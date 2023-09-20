const UserInfoField = ({ label, value }) => (
  <p className="font-bold">
    {label}: <span className="font-normal">{value}</span>
  </p>
);

export default UserInfoField;
