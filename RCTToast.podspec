Pod::Spec.new do |s|
  s.name         = "RCTToast"
  s.version      = "1.0.7"
  s.summary      = "RCTToast"
  s.homepage     = "https://salsoftmobile@bitbucket.org/salsoftmobileapphq/react-native-toast.git"
  s.license      = "MIT"
  s.author             = { "author" => "ammar.tariq@hotmail.com" }
  s.platform     = :ios, "12.0"
  s.source       = { :git => "https://salsoftmobile@bitbucket.org/salsoftmobileapphq/react-native-toast.git", :tag => "master" }
  s.source_files  = "ios/RCTToast/*.{h,m}"
  s.requires_arc = true
  s.dependency "React"
end