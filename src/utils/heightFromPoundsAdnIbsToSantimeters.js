import { getNumbFromStr } from "./getNumbFromStr";
import { getSmFromIbs } from "./getSmFromIbs";

const heightFromPoundsAdnIbsToSantimeters = height => {
    const heightInIbs = getNumbFromStr(height)
    const heightInSantimeters = getSmFromIbs(heightInIbs)
    
    if (heightInSantimeters < 200) {
        return `1м ${(heightInSantimeters % 100).toFixed()}см`
    }
    return `2м ${(heightInSantimeters % 200).toFixed()}см`
}
export default heightFromPoundsAdnIbsToSantimeters