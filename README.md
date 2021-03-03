#### 需求：

1. 能够使用npm安装，支持amd规范
2. 能够按需引入
3. 能够按需打包
4. 能够编写单元测试用例

#### 步骤：

1. 搭建一个属于民生内部的npm仓库，自己管理包的同时借助npm的命令行工具快速复用业务组件。
2. 创建组件库工程
3. 发布组件到npm
4. 测验组件库效果
5. 调试组件库

#### 遇到的问题

1. 如何在最少依赖下快速开发一个vue组件
2. 如何管理所有包的依赖，减少包的体积
3. 如何快速创建组件实例

#### 



#### demo实例---全局导入

1. 项目初始化

   ```
   vue init fe_vui
   ```

   更改一下项目目录，更改的目录如下

   ![https://github.com/Zahara-lanlan/image/blob/master/img/1.png]()

   将生成的src改成examples，用于测试自定义的组件

   新建packages文件夹，用于存放自定义组件，例如Button，Button>src>index.vue组件相关代码，Button>index.js 组件的入口文件，即该文件导出该组件（可以单个导出该组件）,其内容如下：packages>index.js所有组件的入口文件

2. 编写第一个组件

   Button>src>index.vue

   ![image-20210225163407888](/Users/zoulan/Library/Application Support/typora-user-images/image-20210225163407888.png)

   Button>index.js

   ![image-20210225163520297](/Users/zoulan/Library/Application Support/typora-user-images/image-20210225163520297.png)

   packages>index.js

   ![image-20210225163614506](/Users/zoulan/Library/Application Support/typora-user-images/image-20210225163614506.png)

3. 测试组件

   在fe_vui的入口文件main.js中引入

   ![image-20210225163803180](/Users/zoulan/Library/Application Support/typora-user-images/image-20210225163803180.png)

   引入后在app.vue中引入

   ![image-20210225163913870](/Users/zoulan/Library/Application Support/typora-user-images/image-20210225163913870.png)

   测试结果如下：

   ![image-20210225163954931](/Users/zoulan/Library/Application Support/typora-user-images/image-20210225163954931.png)

   在本地测试组件没有问题之后就可以打包上传到npm。

4. 发布第一个npm包

   在上传之前先配置好fe_vui工程的fe_vui>package.json文件

   ![image-20210225165625981](/Users/zoulan/Library/Application Support/typora-user-images/image-20210225165625981.png)

   将package.json配置完成后，执行编译库名=命令

   npm run lib

   ![image-20210225181233137](/Users/zoulan/Library/Application Support/typora-user-images/image-20210225181233137.png)

   编译完成之后就会看到lib文件下有如下内容：

   ![image-20210225180024408](/Users/zoulan/Library/Application Support/typora-user-images/image-20210225180024408.png)

   编译完成之后，接下来就可以开始上传了

   首先查看一下自己npm源

   npm get registry  如果是淘宝的镜像源，就需要修改一下源

   npm config set registry [http://registry.npmjs.org](http://registry.npmjs.org/)

   更改之后，先登录

   ![image-20210225181356803](/Users/zoulan/Library/Application Support/typora-user-images/image-20210225181356803.png)

   发布

   ![image-20210225181455975](/Users/zoulan/Library/Application Support/typora-user-images/image-20210225181455975.png)

   发布成功之后就能在npm中看到自己上传的包了。

   ![image-20210225181651600](/Users/zoulan/Library/Application Support/typora-user-images/image-20210225181651600.png)

   至此，包已成功上传至npm，接下来就是在项目中引用自己定义的组件

5. 使用自定组件

   首先将包下下来

   ```
    npm i myfe_vui --save
   ```

   成功之后在依赖包node_modules目录下边就有自定义的组件包

   下下来之后就是使用了

   ![image-20210225182536858](/Users/zoulan/Library/Application Support/typora-user-images/image-20210225182536858.png)

   ![image-20210225182627523](/Users/zoulan/Library/Application Support/typora-user-images/image-20210225182627523.png)

结果如下：

![image-20210225182705043](/Users/zoulan/Library/Application Support/typora-user-images/image-20210225182705043.png)



至此，全局引入组件的实现已完成，接下来研究每个组件的可配型。



[详情如下](https://github.com/Zahara-lanlan/static_resources/blob/master/%E5%89%8D%E7%AB%AF%E7%BB%84%E4%BB%B6%E5%BA%93.pdf)



