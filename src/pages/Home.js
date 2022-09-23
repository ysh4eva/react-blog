import React, { useState, useEffect } from "react";
import axios from "axios";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { toast } from "react-toastify";
import Blogs from "../components/Blogs";
import Search from "../components/Search";
import Category from "../components/Category";
import LatestBlog from "../components/LatestBlog";
import Pagination from "../components/Pagination";
import "./Home.css";

const Home = () => {
  const [data, setData] = useState([]);
  const [latestBlog, setLatestBlog] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [totalBlog, setTotalBlog] = useState(null);
  const [pageLimit] = useState(2);

  const options = ["Travel", "Fashion", "Fitness", "Sports", "Food", "Tech"];

  useEffect(() => {
    loadBlogsData(0, 2, 0);
    fetchLatestBlog();
  }, []);

  const loadBlogsData = async (start, end, increase, operation) => {
    const totalBlog = await axios.get("http://localhost:5000/blogs");
    setTotalBlog(totalBlog.data.length);
    const response = await axios.get(
      `http://localhost:5000/blogs?_start=${start}&_end=${end}`
    );
    if (response.status === 200) {
      setData(response.data);
      if (operation) {
        setCurrentPage(0);
      } else {
        setCurrentPage(currentPage + increase);
      }
    } else {
      toast.error("Something went wrong");
    }
  };

  const fetchLatestBlog = async () => {
    const totalBlog = await axios.get("http://localhost:5000/blogs");
    const start = totalBlog.data.length - 4;
    const end = totalBlog.data.length;
    const response = await axios.get(
      `http://localhost:5000/blogs?_start=${start}&_end=${end}`
    );
    if (response.status === 200) {
      setLatestBlog(response.data);
    } else {
      toast.error("Something went wrong");
    }
  };

  console.log("data", data);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure that you wanted to delete that blog ?")) {
      const response = await axios.delete(`http://localhost:5000/blogs/${id}`);
      if (response.status === 200) {
        toast.success("Blog Deleted Successfully");
        loadBlogsData(0, 2, 0, "delete");
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  const excerpt = (str) => {
    if (str.length > 50) {
      str = str.substring(0, 50) + " ... ";
    }
    return str;
  };

  const onInputChange = (e) => {
    if (!e.target.value) {
      loadBlogsData(0, 2, 0);
    }
    setSearchValue(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `http://localhost:5000/blogs?q=${searchValue}`
    );
    if (response.status === 200) {
      setData(response.data);
    } else {
      toast.error("Something went wrong");
    }
  };

  const handleCategory = async (category) => {
    const response = await axios.get(
      `http://localhost:5000/blogs?category=${category}`
    );
    if (response.status === 200) {
      setData(response.data);
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <Search
        searchValue={searchValue}
        onInputChange={onInputChange}
        handleSearch={handleSearch}
      />
      <div className="row">
        <div>
          {data.length === 0 && (
            <div className="NoDataFound">
              <h2>No Blog Found</h2>
            </div>
          )}
          <div>
            <div className="col">
              <div>
                {data &&
                  data.map((item, index) => (
                    <Blogs
                      key={index}
                      {...item}
                      excerpt={excerpt}
                      handleDelete={handleDelete}
                    />
                  ))}
              </div>
            </div>
          </div>
          {/* <MDBCol size="3">
            <h4 className="text-start">Latest Post</h4>
            {latestBlog &&
              latestBlog.map((item, index) => (
                <LatestBlog key={index} {...item} />
              ))}
            <Category options={options} handleCategory={handleCategory} />
          </MDBCol> */}
        </div>
      </div>

      <div className="mt-3">
        <Pagination
          currentPage={currentPage}
          loadBlogsData={loadBlogsData}
          pageLimit={pageLimit}
          data={data}
          totalBlog={totalBlog}
        />
      </div>
    </>
  );
};

export default Home;
