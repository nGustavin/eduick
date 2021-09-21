import styles from './styles.module.scss'
import CourseImage from '../../../public/images/course-image.jpg'
import Image from 'next/image'
import Stars from 'simple-rating-stars';

type CourseCardProps = {
    rating: number
    lessons: number
    title: string;
}

export const CourseCard: React.FC<CourseCardProps> = ({
    lessons,
    rating,
    title
}) => {    
    return(
        <div className={styles.cardContainer}>
            <header>
                <Image src={CourseImage} alt="Course Image" />
            </header>
            <div>
                <Stars 
                    stars={rating}
                    outOf={5}
                    empty={'rgba(196, 196, 196, 0.4)'}
                    full={'var(--yellow-500)'}
                    stroke={''}
                />
                <button>
                    {lessons} LESSONS
                </button>
            </div>
            <h1>
                {title}
            </h1>
        </div>
    )
}

