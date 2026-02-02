import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Clock, Users, Globe, BarChart3, CheckCircle, BookOpen, Briefcase, Wrench, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReservationModal from "@/components/ReservationModal";
import { getCourseBySlug, courses } from "@/data/courses";

const CourseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const course = getCourseBySlug(slug || "");
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Course Not Found</h1>
          <p className="text-muted-foreground mb-8">The course you're looking for doesn't exist.</p>
          <Link to="/courses">
            <Button>Browse All Courses</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Get related courses
  const relatedCourses = courses
    .filter(c => c.id !== course.id && c.categories.some(cat => course.categories.includes(cat)))
    .slice(0, 3);

  const getLevelColor = (level: string) => {
    switch (level) {
      case "beginner":
        return "text-green-600";
      case "intermediate":
        return "text-yellow-600";
      case "expert":
        return "text-red-600";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="text-sm mb-8">
            <Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground">Home</Link>
            <span className="mx-2 text-primary-foreground/50">•</span>
            <Link to="/courses" className="text-primary-foreground/70 hover:text-primary-foreground">Course</Link>
            <span className="mx-2 text-primary-foreground/50">•</span>
            <span className="text-primary-foreground font-medium">{course.title}</span>
          </nav>

          {/* Category Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {course.categories.map((category) => (
              <Badge key={category} className="bg-secondary text-secondary-foreground">
                {category}
              </Badge>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Course Info */}
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                {course.title}
              </h1>
              <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
                {course.description}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary-foreground">VP</span>
                </div>
                <span className="text-primary-foreground font-medium">{course.instructor}</span>
              </div>
            </div>

            {/* Enrollment Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 overflow-hidden shadow-elevated">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <Button 
                    onClick={() => setIsModalOpen(true)}
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground mb-6" 
                    size="lg"
                  >
                    Reserve Your Spot
                  </Button>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>Duration</span>
                      </div>
                      <span className="font-medium text-foreground">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>Maximum Students</span>
                      </div>
                      <span className="font-medium text-foreground">{course.maxStudents}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Globe className="h-4 w-4" />
                        <span>Language</span>
                      </div>
                      <span className="font-medium text-foreground">{course.language}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <BarChart3 className="h-4 w-4" />
                        <span>Skill Level</span>
                      </div>
                      <span className={`font-medium capitalize ${getLevelColor(course.level)}`}>
                        {course.level}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="bg-muted mb-8">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="instructor">Instructor</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-0">
                  <Card className="border-0 shadow-card">
                    <CardContent className="p-8">
                      <h2 className="text-2xl font-bold text-foreground mb-6">Course Overview</h2>
                      <h3 className="text-xl font-semibold text-foreground mb-4">{course.title}</h3>
                      <p className="text-muted-foreground mb-8 leading-relaxed">
                        {course.description}
                      </p>

                      <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-secondary" />
                        What You'll Learn
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3 mb-8">
                        {course.overview.map((item, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Curriculum Section */}
                      {course.curriculum && course.curriculum.length > 0 && (
                        <>
                          <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                            <BookOpen className="h-5 w-5 text-primary" />
                            Course Curriculum
                          </h4>
                          <div className="space-y-3 mb-8">
                            {course.curriculum.map((item, index) => (
                              <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                                  {index + 1}
                                </span>
                                <span className="text-foreground font-medium pt-1">{item}</span>
                              </div>
                            ))}
                          </div>
                        </>
                      )}

                      {/* Career Opportunities */}
                      {course.careerOpportunities && course.careerOpportunities.length > 0 && (
                        <>
                          <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                            <Briefcase className="h-5 w-5 text-secondary" />
                            Career Opportunities
                          </h4>
                          <div className="flex flex-wrap gap-2 mb-8">
                            {course.careerOpportunities.map((career, index) => (
                              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                                {career}
                              </Badge>
                            ))}
                          </div>
                        </>
                      )}

                      {/* Tools You'll Master */}
                      {course.tools && course.tools.length > 0 && (
                        <>
                          <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                            <Wrench className="h-5 w-5 text-primary" />
                            Tools You'll Master
                          </h4>
                          <div className="flex flex-wrap gap-2 mb-8">
                            {course.tools.map((tool, index) => (
                              <Badge key={index} variant="outline" className="px-4 py-2 text-sm border-primary text-primary">
                                {tool}
                              </Badge>
                            ))}
                          </div>
                        </>
                      )}

                      {/* Hands-on Projects */}
                      {course.projects && course.projects.length > 0 && (
                        <>
                          <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                            <FolderOpen className="h-5 w-5 text-secondary" />
                            Hands-on Projects
                          </h4>
                          <div className="space-y-3">
                            {course.projects.map((project, index) => (
                              <div key={index} className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">{project}</span>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="instructor" className="mt-0">
                  <Card className="border-0 shadow-card">
                    <CardContent className="p-8">
                      <h2 className="text-2xl font-bold text-foreground mb-6">About the Instructor</h2>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-2xl font-bold text-primary">VP</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{course.instructor}</h3>
                          <p className="text-muted-foreground">Founder & Lead Trainer at Surat Digital Marketing School</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Vikaas Parekh is a seasoned digital marketing expert with over 10 years of experience 
                        in the industry. He has trained 3000+ students and helped 500+ businesses grow their 
                        online presence. His practical approach to teaching ensures students gain real-world 
                        skills they can apply immediately.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="reviews" className="mt-0">
                  <Card className="border-0 shadow-card">
                    <CardContent className="p-8">
                      <h2 className="text-2xl font-bold text-foreground mb-6">Student Reviews</h2>
                      <div className="space-y-6">
                        {[
                          {
                            name: "Priya Sharma",
                            role: "Digital Marketing Executive",
                            initials: "PS",
                            review: "This course completely transformed my career! Vikaas Sir's practical approach made complex concepts easy to understand. Within 2 months of completing, I got a 40% salary hike."
                          },
                          {
                            name: "Rahul Patel",
                            role: "Freelancer",
                            initials: "RP",
                            review: "Best investment I made for my freelancing career. The hands-on projects and real-world examples helped me land my first 5 clients within weeks of completion."
                          },
                          {
                            name: "Sneha Desai",
                            role: "Business Owner",
                            initials: "SD",
                            review: "As a small business owner, I was struggling with digital marketing. This course gave me the confidence to run my own campaigns. My online sales have increased by 3x!"
                          },
                          {
                            name: "Amit Kumar",
                            role: "Marketing Manager",
                            initials: "AK",
                            review: "The curriculum is industry-relevant and up-to-date. Vikaas Sir shares real case studies from his 30+ years of experience. Highly recommended for anyone serious about digital marketing."
                          }
                        ].map((student, i) => (
                          <div key={i} className="border-b border-border pb-6 last:border-0">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                <span className="text-sm font-bold text-primary">{student.initials}</span>
                              </div>
                              <div>
                                <p className="font-bold text-foreground">{student.name}</p>
                                <p className="text-sm text-muted-foreground">{student.role} • Verified Student</p>
                              </div>
                              <div className="ml-auto flex gap-0.5">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <svg key={star} className="w-4 h-4 text-secondary fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                              "{student.review}"
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Related Courses (Desktop sidebar continuation) */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold text-foreground mb-6">Related Courses</h3>
              <div className="space-y-4">
                {relatedCourses.map((relatedCourse) => (
                  <Link key={relatedCourse.id} to={`/courses/${relatedCourse.slug}`}>
                    <Card className="overflow-hidden border-0 shadow-card hover:shadow-elevated transition-all duration-300 group">
                      <div className="flex gap-4 p-4">
                        <img
                          src={relatedCourse.image}
                          alt={relatedCourse.title}
                          className="w-24 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 text-sm mb-2">
                            {relatedCourse.title}
                          </h4>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            <span>{relatedCourse.duration}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReservationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        courseName={course.title}
      />

      <Footer />
    </div>
  );
};

export default CourseDetail;
