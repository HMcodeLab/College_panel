import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BASE_URL } from "@/lib/api";
import { IoTrendingUpSharp } from "react-icons/io5";

interface Instructor {
  name: string;
}

interface Course {
  _id: string;
  slug: string;
  title: string;
  featured_image: string;
  featured_video: string;
  duration: number;
  level: string;
  category: string;
  subcategory: string;
  base_price: number;
  discount_percentage: number;
  overview?: string;
  credits?: number;
  instructor?: Instructor;
}

interface TopProductsProps {
  searchTerm: string;
}

const extractYouTubeId = (url: string): string => {
  const regExp =
    /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\\s]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : "";
};

const TopProducts: React.FC<TopProductsProps> = ({ searchTerm }) => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const query = searchTerm?.trim()
          ? `${BASE_URL}/courses?search=${encodeURIComponent(searchTerm)}`
          : `${BASE_URL}/courses`;

        const res = await fetch(query);
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        const data = await res.json();
        setCourses(Array.isArray(data.courses) ? data.courses : []);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setCourses([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [searchTerm]);

  const getDiscountedPrice = (base: number, discount: number) =>
    Math.round(base - (base * discount) / 100);

  return (
    <section className="p-6 lg:px-24 mt-0 z-0">
      <h1 className="main-heading mb-6">
        {searchTerm?.trim() ? "Search Results" : "All Swayam Courses"}
      </h1>

      {loading ? (
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-600 mb-4"></div>
          <p>Loading courses...</p>
        </div>
      ) : courses.length === 0 ? (
        <p>No courses found.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => {
            const videoId = extractYouTubeId(course.featured_video);
            return (
              <Link
                key={course._id}
                href={`https://hopingminds.com/detailcourse/${course.slug}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="block bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition cursor-pointer flex flex-col h-full"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Top Section: Video or Image */}
                  <div className="relative w-full h-44 rounded-xl overflow-hidden mb-4">
                    {hoveredIndex === index && videoId ? (
                      <iframe
                        className="absolute inset-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0`}
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title={course.title}
                      />
                    ) : (
                      <Image
                        src={course.featured_image}
                        alt={course.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="transition-opacity duration-300 object-cover"
                      />
                    )}
                  </div>

                  {/* Instructor and Price */}
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                        <span className="text-sm">👤</span>
                      </div>
                      <p className="text-sm font-medium text-gray-800">
                        {course?.instructor?.name || "Instructor"}
                      </p>
                    </div>
                    <div className="text-green-600 text-lg font-bold">
                      ₹
                      {getDiscountedPrice(
                        course.base_price,
                        course.discount_percentage
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-md font-bold text-gray-900 mb-2">
                    {course.title}
                  </h2>

                  {/* Description */}
                  <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                    {course.overview ||
                      "Learn to build stunning web interfaces with HTML, CSS, JS, React, and more."}
                  </p>

                  {/* Meta Info */}
                  <div className="text-xs text-gray-500 mb-2 space-y-1">
                    {/* <p>📚 Credits – {course.credits ?? 3}</p> */}
                    <p>⏱ Duration – {course.duration ?? 45} Hours</p>
                    <p>
                      📂 Category – {course.category} / {course.subcategory}
                    </p>
                    {course.credits !== undefined ? (
                      <div className="flex space-x-2 items-center xsm:space-x-1 sm:space-x-1 pt-2">
                        <IoTrendingUpSharp className="w-[22px] h-[22px] text-[#DFDFDF] xsm:w-[15px] xsm:h-[15px] sm:w-6 sm:h-6 md:h-8 md:w-8" />
                        <p className="font-pop text-[14px] font-medium text-[#555555] xsm:text-[10px] sm:text-[10px] sm:leading-none md:text-[6px]">
                          <span
                            className={`font-bold uppercase text-[12px] ${
                              course.credits > 1
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                          >
                            Credits - {course.credits > 1 ? "YES" : "NO"}
                          </span>
                        </p>
                      </div>
                    ) : null}
                  </div>

                  {/* Discount Badge */}
                  {course.discount_percentage > 0 && (
                    <div className="mt-auto">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                        {course.discount_percentage}% OFF
                      </span>
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default TopProducts;
