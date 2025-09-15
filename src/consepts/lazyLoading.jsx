import { lazy } from "react"
import ImageLazyLoading from "../components/imageLazyLoading"
const LazyButtonComp = lazy(() => import('./../components/button'))
export const LazyLoadDemo = () => {
    return (
        <div>
            <h2>Lazy Load Component</h2>
            <LazyButtonComp />
            < ImageLazyLoading />

        </div>
    )
}