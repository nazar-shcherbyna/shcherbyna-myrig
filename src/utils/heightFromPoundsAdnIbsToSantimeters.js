const heightFromPoundsAdnIbsToSantimeters = height => {
    const heightInPoundsAndIbs = height.split("'");
    const heightInIbs = heightInPoundsAndIbs[1].split('"');
    const heightInSantimeters = heightInPoundsAndIbs[0] * 30.48 + heightInIbs[0] * 2.54;
    if (heightInSantimeters < 200) {
        return `1м ${(heightInSantimeters % 100).toFixed()}см`
    }
    return `2м ${(heightInSantimeters % 200).toFixed()}см`
}
export default heightFromPoundsAdnIbsToSantimeters