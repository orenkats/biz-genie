

export const Footer = () => {
  return (
    <footer className="items-center justify-center  bg-white">
      <div className="items justify-center  flex flex-row space-x-4">
        <div  className = "items-center flex-row">
          <a href="#" className="text-gray-400 hover:text-gray-100">About</a>
        </div>
        <div  className = "items-center">
          <a href="#" className="text-gray-400 hover:text-gray-100">Careers</a>  
        </div>
        <div  className = "items-center">
          <a href="#" className="text-gray-400 hover:text-gray-100">Blog</a>
        </div>
        
      </div>
      <div className="max-w-6xl mx-auto mt-2 pt-4 border-t border-white/10 text-center text-gray-600">
        <p>&copy; 2024 bizGenie. All rights reserved.</p>
      </div>
    </footer>
  );
};