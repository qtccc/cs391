import './App.css'
import {CourseStaff} from "./components/course-staff"

function App() {
    return (
        <div>
            <h2>Welcome to my first React application</h2>
            <div>
                <h4>Look at my custom content!</h4>
                <CourseStaff name="Taymaz" title="Professor" rating={100} />
                <CourseStaff name="Jeffrey" title="Teaching Assistant" rating={100} />
                <CourseStaff name="Sadiq" title="Course Assistant" rating={100} />
                <CourseStaff name="Ale" title="Course Assistant" rating={100} />
            </div>
        </div>

    )
}

export default App