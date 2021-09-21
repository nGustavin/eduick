import React, { useEffect, useState } from 'react'
import {LoggedHeader} from '../../components/Header/Logged'
import Image from 'next/image'
import Detail from '../../../public/images/details.svg'
import People from '../../../public/images/people.svg'

import styles from './styles.module.scss'
import { CourseCard } from '../../components/CourseCard'
import { api } from '../../services/api'

type Courses = {
    id: string;
    title: string;
    lessons: number;
    rating: number
}

const Dashboard: React.FC<Courses> = () => {
    const [courses, setCourses] = useState<Courses[]>([])

    useEffect(() => {
        const getCourses = async () => {
            const response = await api.get('/courses')
            setCourses(response.data)
        }

        getCourses()
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
                            key={id}
                            lessons={lessons}
                            rating={rating}
                            title={title}
                        />
                    ))}
                </div>

            </main>
        </>
    )
}

export default Dashboard