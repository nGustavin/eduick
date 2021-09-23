import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Detail from '../../../public/images/details.svg'
import People from '../../../public/images/people.svg'
import { CourseCard } from '../../components/CourseCard'
import { Footer } from '../../components/Footer'
import { LoggedHeader } from '../../components/Header/Logged'
import { Loader } from '../../components/Loading'
import { api } from '../../services/api'
import styles from './styles.module.scss'


type Courses = {
    id: string;
    title: string;
    lessons: number;
    rating: number
}

const Dashboard: React.FC<Courses> = () => {
    const [courses, setCourses] = useState<Courses[]>([])
    const [currentPage, setCurrentPage] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getCourses = async () => {
            const response = await api.get(`/courses?_page=${currentPage}&_limit=9`, {

            })
            if(response.data){
                setCourses((prevCourses) => [...prevCourses, ...response.data])
            }
        }

        getCourses()
    }, [currentPage])

    useEffect(() => {
        // Using intersection observer to trigger a event when footer is visible on screen
        const intersectionObserver = new IntersectionObserver((entries) => {
            if(entries.some((entry) => entry.isIntersecting)){
                setIsLoading(() => true)
                // // Setting currentPage + 1 to get next page data from api
                setTimeout(() => {
                    setCurrentPage((currentPageInsideState) => currentPageInsideState + 1)
                    setIsLoading(() => false)
                }, 3500)
            }
            
            if(entries.some((entry) => entry.isIntersecting === false)){
                setIsLoading(() => false)
            }
        }, {
            rootMargin: '60px',
        })

        intersectionObserver.observe(document.querySelector('#intersection'))
        return () => intersectionObserver.disconnect()
    }, [])

    return(
        <>
            <LoggedHeader/>
            <main className={styles.layoutContainer}>
                <div className={styles.openingCard}>
                    <div className={styles.detailImage}>
                        <Image src={Detail} alt="Detail" />
                    </div>
                    <main>
                        <h1>Hello {' '}
                            <span>Student</span>
                            <strong>.</strong>
                        </h1>
                        <p>
                            Whether you are a student trying to find your ideal private language <br/> 
                            teachers/tutors
                        </p>
                    </main>
                    <div> 
                        <Image src={People} alt="People" />
                    </div>
                </div>

                <div className={styles.gridContainer}>
                    {courses.map(({id, lessons,rating,title}) => (
                        <CourseCard 
                            key={`${Math.random()}_${id}`}
                            lessons={lessons}
                            rating={rating}
                            title={title}
                        />
                    ))}
                </div>
                <Loader loading={isLoading}/>
            </main>
            <Footer />
        </>
    )
}

export default Dashboard