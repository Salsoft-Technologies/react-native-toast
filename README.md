
# React Native Toast 

> Library based on react-native-toast ( remobile ), that fixes pod file error on ios and build sdk errors on android

## Installation
```sh
npm install --save git+https://salsoftmobile@bitbucket.org/salsoftmobileapphq/react-native-toast.git

- OR -

yarn add git+https://salsoftmobile@bitbucket.org/salsoftmobileapphq/react-native-toast.git
```

### LINKING 
> Automatic linking after react-native 0.60, for additional steps follow the platform dependent instructions below 


### Installation (iOS)

```
    1. add pod 'RCTToast', :path => '../node_modules/react-native-toast/RCTToast.podspec'
    2. Run following command in terminal from root of the project
```
    /> cd ios && pod install
### Installation (Android)
```
    Automatic installation for react-native >= 0.60.0
```


### Usage
```js
import Toast from 'react-native-toast'
Toast.show('asd')
```

