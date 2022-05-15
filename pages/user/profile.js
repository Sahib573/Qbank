import { protectedRoute } from "../../components/context/ProtectedRoute";
import { useAuth } from "../../components/context/AuthContext";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const Profile = () => {
  const { currentUser } = useAuth();
  return (
    <div>
      <NavBar />
      <div className="p-10">
        <div className="p-0 bg-white shadow mt-10 grid grid-cols-3">
          <div className="rounded-full flex items-center justify-center mx-auto  text-indigo-500">
            <img
              src={currentUser.photoURL}
              className="h-40 shadow w-70 rounded-lg"
              alt="Profile picture"
            />
          </div>
          <div className="mt-10 border-b pb-12 col-span-2">
            <h1 className="text-4xl font-medium text-gray-700">
              {currentUser.displayName}
            </h1>
            <p className="mt-4 text-gray-500">{currentUser.email}</p>
            <h1 className="text-2xl font-medium text-gray-700">
              Points : Some Points
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default protectedRoute(Profile);
