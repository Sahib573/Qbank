import Link from "next/link";
import Image from "next/image";
import { useAuth } from "./context/AuthContext";

function NavBar() {
  const { currentUser, googleLogin, logout } = useAuth();
  const googleLoginHandler = async () => {
    await googleLogin();
  };
  const signOutButton = async () => {
    await logout();
  };

  const pdfdownload = async () => {
    // const Pdfmake = require("pdfmake");
    // let pdfmake = new Pdfmake();
    // let docdef = {
    //   content: ["hello bc"],
    // };
    // let pdfdoc;
    // pdfdoc = pdfmake.createPdfKitDocument(docdef, {});
    // pdfdoc.end();
    let pdfmake = require("pdfmake");
    let docDefinition = {
      content: ["This is an sample PDF printed with pdfMake"],
    };
    pdfmake.createPdf(docDefinition).open();
    pdfmake.end();
  };
  return (
    <div className="sticky top-0 z-50">
      <div className="bg-white shadow">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2">
            <Link href="/" passHref>
              <div>
                <Image
                  src="/logo.jpg"
                  alt=" Logo"
                  className="h-10 w-30"
                  height="40px"
                  width="80px"
                />
              </div>
            </Link>
            <div className="hidden sm:flex sm:items-center">
              <Link href="/" passHref>
                <div className="text-gray-700 text-lg font-semibold hover:text-teal-600   cursor-pointer mr-4">
                  Home
                </div>
              </Link>
              <Link href="/questions" passHref>
                <div className="text-gray-700 text-lg font-semibold hover:text-teal-600   cursor-pointer mr-4">
                  Questions
                </div>
              </Link>
              <Link href="/questions" passHref>
                <div
                  className="text-gray-700 text-lg font-semibold hover:text-teal-600   cursor-pointer mr-4"
                  onClick={pdfdownload}
                >
                  pdf
                </div>
              </Link>
            </div>

            {currentUser ? (
              <div className="hidden sm:flex sm:items-center">
                <Link href="/" passHref>
                  <div
                    className="text-gray-700 ml-2 text-lg font-semibold border px-4 py-2 rounded-lg hover:text-teal-600   cursor-pointer hover:border-teal-600   "
                    onClick={signOutButton}
                  >
                    Sign Out
                  </div>
                </Link>
                <Link href="/user/profile" passHref>
                  <div className="text-gray-700 ml-2 text-lg font-semibold border px-4 py-2 rounded-lg hover:text-teal-600   cursor-pointer hover:border-teal-600   ">
                    {" "}
                    Profile
                  </div>
                </Link>
              </div>
            ) : (
              <div className="hidden sm:flex sm:items-center">
                <div onClick={() => googleLoginHandler()}>
                  <div className="text-gray-700 ml-2 text-lg font-semibold border px-4 py-2 rounded-lg hover:text-teal-600 cursor-pointer hover:border-teal-600  ">
                    LogIn
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
