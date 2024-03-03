import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="text-center bg-gray-700 text-white text-3xl min-h-12">
      User: {userid}{" "}
    </div>
  );
}
export default User;
