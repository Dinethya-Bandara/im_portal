import "./Footer.css";

export default function Footer() {
  return (
      <div className="w-full flex items-center justify-center my-4 mx-4">
        © {new Date().getFullYear()} Department of Industrial Management, University
        of Kelaniya. All rights reserved.
      </div>
  );
}
