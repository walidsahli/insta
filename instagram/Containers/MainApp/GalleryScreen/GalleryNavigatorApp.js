import { createStackNavigator, StackViewTransitionConfigs } from "react-navigation-stack";
import BrowseFiles from "./components/BrowseFiles";
import TakePhoto from "./components/TakePhoto";
import RecordVideo from "./components/RecordVideo";
import { createAppContainer } from "react-navigation";



const navs = createStackNavigator({
    GALLERY: {
        screen: BrowseFiles
    },
    PHOTO: {
        screen: TakePhoto
    },
    VIDEO: {
        screen: RecordVideo
    }
}, {
    headerMode: 'none',
    initialRouteName: 'PHOTO',
    transitionConfig: () =>
        StackViewTransitionConfigs.SlideFromRightIOS
})

export default GalleryNavigatorApp = createAppContainer(navs)