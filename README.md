##项目目录
│  .babelrc                       //babel配置文件
│  .editorconfig                  
│  .eslintignore                  //eslintignore
│  .eslintrc.js                   //eslint检测规则
│  .gitignore                     //gitignore
│  .postcssrc.js                  //postcss配置文件
│  index.html                     //首页
│  package-lock.json              //锁定当前使用的各模块版本
│  package.json                   
│  README.md                      //项目说明文档
│  
├─build                           //打包相关的文件夹
│      build.js                   //
│      check-versions.js          //
│      logo.png                   
│      utils.js                   //
│      vue-loader.conf.js         //
│      webpack.base.conf.js       //最基本的webpack的配置
│      webpack.dev.conf.js        //开发环境webpack配置文件
│      webpack.prod.conf.js       //生产环境webpack配置文件
│      
├─config                          //存放webpack开发环境和生产环境下的配置
│      dev.env.js                 //
│      index.js                   //
│      prod.env.js                //
│
└─dist                            //webpack打包后的项目所在的文件      
│                  
├─src                             //开发代码文件夹
│  │  App.vue                     //vue根节点
│  │  main.js                     //项目入口
│  │  
│  ├─assets                       //资源文件夹
│  │      logo.png                
│  │      
│  ├─components                   //vue组件
│  │      HelloWorld.vue          //
│  │      
│  └─router                       //
│          index.js               //vue router
│          
└─static                          //存放不需要经由webpack处理的文件，一些第三方的没有被npm管理起来的css,js库
|                                  //webpack会将这个文件原封不动复制到打包的文件夹下
