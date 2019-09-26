# 前言
我是一名在校的大三学生，怀揣着对编程的热情，对世界的热衷。近期有许许多多原因，课程方面，个人方面，还是客观环境方面，导致我想开发一个仿qq的app。考虑到目前掌握的一些框架，故而以前端框架的方式去开发这个app。
至于后台，想着是重拾java，决定使用java当前流行的框架springboot开发服务端程序，聊天部分则是使用websocket，数据库是mysql，所以很自然的使用了mybatis，另外购买的服务器来自于阿里云，服务端程序部署于tomcat8.0。
从技术上来说这个app的确揉和了很多技术，可能有人认为常见而觉得low，有人没听说过而觉得一脸懵逼。但是“万语归宗”，我们不必去纠结技术是什么，而应该重新思考编程的本质，程序的设计技巧。
当然，我能力也是不足，加上时间比较急促，使用现成的框架对我而言将是非常合适的选择。
标题中提到了uni-app，这是dcloud公司开发的一个全新的跨三端的前端框架，本来用的是vue，可纯粹的vue无法与安卓系统产生交互，而我机缘巧合碰上了uni-app，就索性使用uni-app了。
uni-app框架入门非常简单，基本兼容于vue.js。放个文档链接感兴趣者可以观望一二，但学不学其实无所谓了，有很多东西都能替代它。
 - [uni-app文档](https://uniapp.dcloud.io/)
--------------------------------------------------
## 另外说明一下我使用到的工具和服务器

 1. IDE:intellij idea (万能ide) HbuilderX （用于前端的开发）datagrip（数据库的管理）
 2. 阿里云服务器centos7.3 
 3. 环境 mysql,node.js,java11
--------------------------------------------------

## 附上我在写这个app时，自我感觉比较有收获的一些网址，都是干货哦。

 


 -  [springboot入门教程](https://github.com/JeffLi1993/springboot-learning-example)
- [java泛型](https://www.cnblogs.com/lwbqqyumidi/p/3837629.html)
- [mybatis使用的奇技淫巧](https://segmentfault.com/a/1190000008417713#articleHeader2)
- [Java的Json解析包FastJson使用](https://www.cnblogs.com/wgale025/p/5875430.html)
- [spring boot +WebSocket实现（后台主动）消息推送](https://blog.csdn.net/zhangdehua678/article/details/78913839/)
- [webapp用户身份认证方案 JSON WEB TOKEN 实现](https://www.cnblogs.com/zuolun2017/p/7872309.html)
- [Intellij IDEA社区版打包Maven项目成war包，并部署到tomcat上](https://blog.csdn.net/yums467/article/details/51660683)
- [Centos7.3安装和配置Tomcat8](https://www.cnblogs.com/wishwzp/p/7113410.html)
 ps:后续会补充

--------------------------------------------------
## 开始正文啦，第一步！构建项目
咱们一步步来，从零开始建立一个maven项目
打开idea，左上角file -> new ->project..
![在这里插入图片描述](https://img-blog.csdnimg.cn/20181116174803108.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4MjU2NTYz,size_16,color_FFFFFF,t_70)
直接next ，接着可以选择填入你自己的包名
![在这里插入图片描述](https://img-blog.csdnimg.cn/20181117163309484.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4MjU2NTYz,size_16,color_FFFFFF,t_70)
finish以后，生成的纯净的maven项目结构如下图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20181116174826360.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4MjU2NTYz,size_16,color_FFFFFF,t_70)
添加必要的依赖，请打开pom.xml，默认的应该是这样
```
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.myqq</groupId>
    <artifactId>myqq</artifactId>
    <version>1.0-SNAPSHOT</version>
</project>
```
当然其中的groupId 和 artifactId 是创建项目时自己所填写的，所以不同。
接下来我们要配置我们会用到的一些属性，插件，或者依赖，我会简要地说明配置这些内容的原理。
我们要对pom.xml增加一些节点，代码如下：
```
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.myqq</groupId>
    <artifactId>myqq</artifactId>
    <version>1.0-SNAPSHOT</version>
    ------------------------以下是增加的一些配置------------------------------------------------------------------
	<!-- 声明项目完成后打包成war文件，使部署在阿里云服务器的tomcat -->
  	<packaging>war</packaging>
    <!-- Spring Boot 启动父依赖 -->
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>1.5.1.RELEASE</version>
    </parent>
    <properties>
    </properties>

    <dependencies>
    </dependencies>
    <build>
        <plugins>

        </plugins>
    </build>
     ------------------------以上是增加的一些配置----------------------------------------------------------------
</project>
```
\<parent\> 这整个标签的作用是：引用org.springframework.boot作为项目父依赖，起到一个依赖版本管理的作用，当你在 \<dependencies\>中引入一些依赖的时候，可以不填写版本号，因为有了这个父依赖作为仓库，它会自动去父依赖的仓库的中寻找对应名称的最新版本依赖。其他标签暂时还没有内容，顾名思义即可。
**pom.xml中添加下列节点**

```
<!-- 这里申明了一些属性，顾名思义即可，想了解具体的请善用搜索引擎 -->
    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
        <java.version>1.8</java.version>
    </properties>
    <!-- 依赖项 -->
    <dependencies>

        <!-- Spring Boot Web 依赖 -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <!--websoket依赖 -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-websocket</artifactId>
            <version>1.3.5.RELEASE</version>
        </dependency>
        <!--date-time依赖 用于日期转换-->
        <dependency>
            <groupId>joda-time</groupId>
            <artifactId>joda-time</artifactId>
            <!--<version>2.9.9</version>-->
        </dependency>
        <!--阿里巴巴fastjson 用于快速处理json对象-->
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>fastjson</artifactId>
            <version>1.2.32</version>
        </dependency>
        <!--json web token 依赖  用于登录验证的令牌加解密处理-->
        <dependency>
            <groupId>com.auth0</groupId>
            <artifactId>java-jwt</artifactId>
            <version>3.2.0</version>
        </dependency>
        <!-- Junit 单元测试依赖 -->
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.12</version>
        </dependency>
        <!--httpclient依赖  用于服务端向聊天机器人api发送post请求-->
        <dependency>
            <groupId>org.apache.httpcomponents</groupId>
            <artifactId>httpclient</artifactId>
            <version>4.5.2</version>
        </dependency>
    </dependencies>
	<!-- build项 主要是插件 -->
    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <executions>
                    <execution>
                        <id>compile</id>
                        <phase>compile</phase>
                        <goals>
                            <goal>compile</goal>
                        </goals>
                    </execution>
                    <execution>
                        <id>testCompile</id>
                        <phase>test-compile</phase>
                        <goals>
                            <goal>testCompile</goal>
                        </goals>
                    </execution>
                </executions>
            </plugin>
            <!-- 项目最后打包成war包时使用的插件 -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-war-plugin</artifactId>
                <version>2.4</version>
                <configuration>
                    <!-- 打成war文件的名字 这样即是myqqServer.war -->
                    <warName>myqqServer</warName>
                    <failOnMissingWebXml>false</failOnMissingWebXml>
                </configuration>![在这里插入图片描述](https://img-blog.csdnimg.cn/2018111716373467.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4MjU2NTYz,size_16,color_FFFFFF,t_70)
            </plugin>
        </plugins>
    </build>
```
好啦，相信你已经复制粘贴进去了，完了等待idea自动解析依赖项吧....
reslove结束之后，终于要开始写代码啦！先冷静一下，我们还得干一件麻烦事，就是建各种包，谁让我们是从纯净的maven项目开始的呢？好的
![在这里插入图片描述](https://img-blog.csdnimg.cn/2018111716405031.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4MjU2NTYz,size_16,color_FFFFFF,t_70)
像上图这样一个一个的建好整个项目的目录。然后开始写代码咯！！
first of all ，当然是启动类啦！即Start.class，用于启动整个springboot项目
**Start.java**
```
package com.myqq;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;

@SpringBootApplication
public class Start extends SpringBootServletInitializer {
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(Start.class);
    }
    public static void main(String[] args) {
        SpringApplication.run(Start.class, args);
    }
}
```
嗯......我想我们得先试试看这个spingboot项目能不能好好地运行吧..
在controller包中新建一个class Hello
**Hello.java**
```
package com.myqq.controller;
import org.springframework.web.bind.annotation.*;
@RestController
@CrossOrigin(origins = "*", maxAge = 3600)  //这个注解使这个类下的路由允许所有ip地址访问并且最长连接时间为3600毫秒。总之是用于跨域访问的！
public class Hello {
    @RequestMapping(value = "/hello", method = RequestMethod.GET)
    public String hello() {
        return "hello my springboot";
    }
}
```
运行Start.class
![在这里插入图片描述](https://img-blog.csdnimg.cn/20181117165901276.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4MjU2NTYz,size_16,color_FFFFFF,t_70)
这是运行成功的结果
浏览器输入localhost:8080/hello 得到以下结果说明项目已经成功构建
![在这里插入图片描述](https://img-blog.csdnimg.cn/20181117165950884.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4MjU2NTYz,size_16,color_FFFFFF,t_70)
如果这一切都没问题的话，那就可以进入下一步了。

--------------------------------------------------

## 数据库连接和mybatis配置
数据库结构：
![数据库结构](https://img-blog.csdnimg.cn/20181116011514771.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4MjU2NTYz,size_16,color_FFFFFF,t_70)
为了简单起见，表与表并没有任何关联，所有的逻辑全部依靠后台控制，尽管这样不太优雅...
数据库导出文件在此[chat.sql](https://github.com/zhangzibao/git/blob/master/myqq/chat.sql)

--------------------------------------------------

同时为了方便和不出错，我用到了mybatis，而mybatis 是什么呢......[点此进去瞅瞅mybatis](http://www.mybatis.org/mybatis-3/zh/index.html)
因此pom.xml中加入相关依赖配置：
```
        <!-- Spring Boot Mybatis 依赖  用于数据库持久化的长链接-->
        <dependency>
            <groupId>org.mybatis.spring.boot</groupId>
            <artifactId>mybatis-spring-boot-starter</artifactId>
            <version>1.2.0</version>
        </dependency>
        <!--&lt;!&ndash; MySQL 连接驱动依赖 &ndash;&gt;-->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>5.1.39</version>
        </dependency>
```
在application.properties中填入数据连接的相关信息：
**application.properties**
```
## 数据源配置
spring.datasource.url=jdbc:mysql://localhost:3306/chat?useUnicode=true&characterEncoding=utf8&useSSL=false
spring.datasource.username=root
spring.datasource.password=0F03d8efe739
spring.datasource.driver-class-name=com.mysql.jdbc.Driver

## Mybatis 配置
mybatis.mapperLocations=classpath:mapper/*.xml
mybatis.typeAliasesPackage=com.myqq.model
```
**要记得数据库地址密码啥的改一改哦！！**
接着使用一个插件反向生成mybatis需要用的model类和xml配置文件，不用插件的话，手写能把你写成傻子！！
这个插件名字叫做mybatis-generator-maven-plugin
pom.xml 加入这个插件的相关配置
```
<plugin>
                <groupId>org.mybatis.generator</groupId>
                <artifactId>mybatis-generator-maven-plugin</artifactId>
                <version>1.3.2</version>
                <configuration>        			<configurationFile>src/main/resources/generatorConfig/generatorConfig.xml</configurationFile>
                    <verbose>true</verbose>
                    <overwrite>true</overwrite>
                </configuration>
                <executions>
                    <execution>
                        <id>Generate MyBatis Artifacts</id>
                        <goals>
                            <goal>generate</goal>
                        </goals>
                    </execution>
                </executions>
                <dependencies>
                    <dependency>
                        <groupId>org.mybatis.generator</groupId>
                        <artifactId>mybatis-generator-core</artifactId>
                        <version>1.3.2</version>
                    </dependency>
                </dependencies>
</plugin>
```
可以看到配置项之中有一项是configurationFile。如下图所示，我们要先在resources中新建一个文件夹和xml文件

![在这里插入图片描述](https://img-blog.csdnimg.cn/20181117172446454.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4MjU2NTYz,size_16,color_FFFFFF,t_70)
配置文件代码若下：
**generatorConfig.xml**
```
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE generatorConfiguration PUBLIC "-//mybatis.org//DTD MyBatis Generator Configuration 1.0//EN" "http://mybatis.org/dtd/mybatis-generator-config_1_0.dtd" >
<generatorConfiguration>
    <!-- classPathEntry用于设置数据库驱动包位置-->
<classPathEntry location="C:\Users\10787\.m2\repository\mysql\mysql-connector-java\5.1.39\mysql-connector-java-5.1.39.jar"/>
<!-- targetRuntime：代码生成目标，默认是MyBatis3-->
<context id="DB2Tables" targetRuntime="MyBatis3">
    <commentGenerator>
        <property name="suppressAllComments" value="true"/>
    </commentGenerator>
    <!-- 数据库连接的信息 ok -->
    <jdbcConnection driverClass="com.mysql.jdbc.Driver" connectionURL="jdbc:mysql://localhost:3306/chat" userId="root" password="0F03d8efe739">
    </jdbcConnection>
    <!-- 解决数据转换问题 ok-->
    <javaTypeResolver>
        <!--是否强制使用BigDecimal来表示所有的十进制和数值字段。-->
        <property name="forceBigDecimals" value="false" />
    </javaTypeResolver>
    <!--生成模型的包名和位置-->
    <javaModelGenerator targetPackage="com.myqq.model" targetProject="D:\git\myqq\src\main\java">
        <property name="enableSubPackages" value="true" />
        <property name="trimStrings" value="true" />
    </javaModelGenerator>
    <!--生成的映射文件包名和位置-->
    <sqlMapGenerator targetPackage="main/resources/mapper" targetProject="D:\git\myqq\src">
        <property name="enableSubPackages" value="true" />
    </sqlMapGenerator>
    <!--生成DAO的包名和位置-->
    <javaClientGenerator type="XMLMAPPER" targetPackage="com.myqq.dao" targetProject="D:\git\myqq\src\main\java">
        <property name="enableSubPackages" value="true" />
    </javaClientGenerator>
    <!--要生成那些文件-->
    <table tableName="表名"  domainObjectName="类名"></table>
    <table tableName="user" domainObjectName="User"  enableCountByExample="false" enableUpdateByExample="false"
           enableDeleteByExample="false" enableSelectByExample="false" selectByExampleQueryId="false"></table>
    <table tableName="friends" domainObjectName="Friend"  enableCountByExample="false" enableUpdateByExample="false"
           enableDeleteByExample="false" enableSelectByExample="false" selectByExampleQueryId="false"></table>
    <table tableName="messages" domainObjectName="Message"  enableCountByExample="false" enableUpdateByExample="false"
           enableDeleteByExample="false" enableSelectByExample="false" selectByExampleQueryId="false"></table>
</context>
</generatorConfiguration>

```
你除了复制粘贴还需要做几件事
 1. 将数据库账户密码更改成对应你自己的
 2. 将所有涉及到路径和全类名的地方改成自己电脑上的路径和全类名

 **特别注意**： 上面代码的这个节点：

> \<!-- classPathEntry用于设置数据库驱动包位置--\>
> \<classPathEntry location="C:\Users\10787\.m2\repository\mysql\mysql-connector-java\5.1.39\mysql-connector-java-5.1.39.jar"/>



classPathEntry的location属性要设置为本地的数据库驱动jar包，可能会让人有点点一下子的懵逼。不过别方，有我呢！这个路径在idea中就能找到，操作步骤如下：

展开项目文件夹中的External Libraries
![在这里插入图片描述](https://img-blog.csdnimg.cn/20181117173917887.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4MjU2NTYz,size_16,color_FFFFFF,t_70)

找到数据库连接驱动，并copy path
![在这里插入图片描述](https://img-blog.csdnimg.cn/20181117173944115.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4MjU2NTYz,size_16,color_FFFFFF,t_70)
最后粘贴到 classPathEntry 标签的location属性即可。
再次检查一下配置文件，确保都没问题之后，开始使用插件！
首先找到右下角这样的maven project 按钮，点击它！
![在这里插入图片描述](https://img-blog.csdnimg.cn/20181117174139322.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4MjU2NTYz,size_16,color_FFFFFF,t_70)
会打开下图这样的一个界面：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20181117174328557.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4MjU2NTYz,size_16,color_FFFFFF,t_70)
现在是关键时刻，请摸着良心问问自己！真的没问题吗？数据库打开了吗？pom.xml的依赖和插件配置好了吗？generatorConfig.xml配置得没问题吗？如果都ok了，请双击上图中红色框框中的那个插件（千万不能多点哦！），结果如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20181118031726224.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4MjU2NTYz,size_16,color_FFFFFF,t_70)
好啦，插件已经帮你生成了符合mybatis的大量sql语句和对应配置、函数！！是不是很开心啊嘿嘿嘿....
完了呢，把generatorConfig.xml的内容全部注释以保险，上面还说了千万不能多点。这是因为呢...插件二次运行会往mapper文件中添加重复的内容，绝不是覆盖！这种情况下项目运行之时会报错！如果你想重新生成上面那些文件，先删除掉生成的文件，再运行插件就可以了。

最后我们需要在Start.class增加几行代码，使得启动时项目能扫描到这些生成的文件:
**Start.java**
```
package com.myqq;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
@SpringBootApplication
//扫描dao包下的类
@MapperScan("com.myqq.dao")
public class Start extends SpringBootServletInitializer {
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(Start.class);
    }

    public static void main(String[] args) {
        SpringApplication.run(Start.class, args);
    }
}
```
到此为止，数据库连接的mybatis 的配置已经结束啦！！！

--------------------------------------------------

## 服务端逻辑
首先把想实现的功能列出来，这样就知道要写哪些服务端的restfulapi接口
> 
> 获取用户信息（/api/user/{id}）
> 获取当前用户所有好友信息（/api/friends/{id}）
> 获取所有消息记录，并按好友id分好组（/api/message/{user_id}）
> 添加消息记录（ /api/addmessage）
> 机器人消息接口（/api/robot）
> 	发送消息接口，这是即时通往websocket的接口（/socket/push/{cid}）
另外还有websocket的接口
> 连接到websocket（/websocket/{sid}）
>注册接口（/api/register），登录接口（/api/login） 
>
yeah，既然整理好了这些要实现的接口，那么接下来自然就是一一实现啦
### 1.获取用户信息
service包下新建一个interface Userservice，并增加一个impl包，impl包下新建一个class UserServiceImpl。完成后项目结构如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20181118012613539.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4MjU2NTYz,size_16,color_FFFFFF,t_70)
**Userservice.java**
```
package com.myqq.service;

import com.myqq.model.User;
/**
 * 用户业务逻辑接口类
 *
 * Created by zhangzibao on 11/18/2018.
 */
public interface UserService {


    /**
     * 根据用户 ID,查询用户信息
     *
     * @param id
     * @return
     */
    User findUserById(int id);
}
```
**UserServiceImpl.java**
```
package com.myqq.service.impl;
import com.myqq.dao.UserMapper;
import com.myqq.model.User;
import com.myqq.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
/**
 * 城市业务逻辑实现类
 * <p>
 * Created by bysocket on 07/02/2017.
 */
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper UserMapper;

    @Override
    public User findUserById(int id) {
        return UserMapper.selectByPrimaryKey(id);
    }
}
```
填完这个java文件的代码，可能 @Autowired这一行代码会有红色波浪线（实测程序能正常运行），但是这会让有强迫症的朋友很烦恼，如何去掉呢？对dao包下的每个Mapper接口加一个@Repository注解即可，就像这样（这里只列举了一个，其他也可以选择增加注解）
**UserMapper.java**
```
package com.myqq.dao;

import com.myqq.model.Friend;
import org.springframework.stereotype.Repository;
@Repository  // 这里加一个注解就好啦
public interface FriendMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Friend record);

    int insertSelective(Friend record);

    Friend selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Friend record);

    int updateByPrimaryKey(Friend record);
}
```
controller包下新建一个class UserRestController
**UserRestController.java**
```
package com.myqq.controller;
import com.myqq.model.User;
import com.myqq.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class UserRestController {

    @Autowired
    private UserService userService;

    // 获取用户信息
    @RequestMapping(value = "/api/user/{id}", method = RequestMethod.GET)
    public User findOneCity(@PathVariable("id") int id) {
        return userService.findUserById(id);
    }

}
```
此时可以启动Start.class试试看能否获取到用户信息
浏览器地址栏输入http://localhost:8080/api/user/1 得到用户id为1的全部信息，大功告成！
![在这里插入图片描述](https://img-blog.csdnimg.cn/20181118014455959.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4MjU2NTYz,size_16,color_FFFFFF,t_70)
### 2.获取当前用户所有好友信息（/api/friends/{id}）
直接仿照获取用户信息的接口，注意到用户和他的朋友们的关系是一对多的，这就要求最终返回的是一个List,而插件自动生成的Mapper是没有这个函数的以及sql语句的。
所以我们需要对两个部分进行编辑
**一个是dao包下面的FriendMapper.java增加一个成员函数**
```
List<User> getAllFreinds(int id);
```
**另外一个是resources/mapper/FriendMapper.xml  的mapper节点下添加两个子节点**
```
  <resultMap id="UserResultMap" type="com.myqq.model.User">
    <id column="id" property="id" jdbcType="INTEGER"/>
    <result column="u_avatar" property="uAvatar" jdbcType="VARCHAR"/>
    <result column="u_birthday" property="uBirthday" jdbcType="VARCHAR"/>
    <result column="u_name" property="uName" jdbcType="VARCHAR"/>
    <result column="u_gender" property="uGender" jdbcType="VARCHAR"/>
    <result column="u_email" property="uEmail" jdbcType="VARCHAR"/>
    <result column="u_phone" property="uPhone" jdbcType="INTEGER"/>
    <result column="u_address" property="uAddress" jdbcType="VARCHAR"/>
    <result column="u_autograph" property="uAutograph" jdbcType="VARCHAR"/>
    <result column="u_about" property="uAbout" jdbcType="VARCHAR"/>
    <result column="u_password" property="uPassword" jdbcType="VARCHAR"/>
  </resultMap>
    <select id="getAllFreinds" resultMap="UserResultMap" parameterType="java.lang.Integer">
        select user.id,
               user.u_avatar,
               user.u_birthday,
               user.u_name,
               user.u_gender,
               user.u_email,
               user.u_phone,
               user.u_address,
               user.u_autograph,
               user.u_about,
               user.u_password
        from user,
             friends
        where friends.user_id = #{id,jdbcType=INTEGER}
          and user.id = friends.friend_id
    </select>
```
然后再补充Service 和 controller
**Friendservice.java**
```
package com.myqq.service;

import com.myqq.model.User;

import java.util.List;

public interface FriendService {
    /**
     * 根据用户 ID,获取所有好友信息
     *
     * @param id
     * @return 好友列表
     */
    List<User> findFriend(int id);
}

```
**FriendServiceImpl.java**
```
package com.myqq.service.impl;

import com.myqq.dao.FriendMapper;
import com.myqq.model.User;
import com.myqq.service.FriendService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FriendServiceImpl implements FriendService {

    @Autowired
    private FriendMapper friendMapper;

    public List<User> findFriend(int id) {

        return friendMapper.findAllFriend(id);
    }
}
```
**FriendRestController.java**
```
package com.myqq.controller;
import com.myqq.model.User;
import com.myqq.service.FriendService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class FriendRestController {
    @Autowired
    private FriendService friendService;

    @RequestMapping(value = "/api/friends/{id}", method = RequestMethod.GET)
    public List<User> findOneCity(@PathVariable("id") int id) {
        return friendService.findFriend(id);
    }

}
```
### 消息
1. 获取所有消息记录，并按好友id分好组（/api/message/{user_id}）
2. 添加消息记录（ /api/addmessage）

我们可以观察到添加消息记录的sql语句和mapper接口都自动生成了，但是获取所有的消息记录并按id分组却没有，所以还得自己写sql语句，这里有点特殊，没法直接group by id我们得按mybatis框架的语法来操作。
首先model下新增两个class
**UserMessage**
```
package com.springboot.my_qq.model;

import java.util.List;

public class UserMessage {
    private Integer friendId;
    private List<ListMessage> list;

    public Integer getFriendId() {
        return friendId;
    }

    public void setFriendId(Integer friendId) {
        this.friendId = friendId;
    }

    public List<ListMessage> getlist() {
        return list;
    }

    public void setlist(List<ListMessage> list) {
        this.list = list;
    }
}
```
**ListMessage**
```
package com.myqq.model;

import java.util.Date;

public class ListMessage {
    private Date addTime;
    private Boolean isreceive;
    private String messageContent;

    public Date getAddTime() {
        return addTime;
    }

    public void setAddTime(Date addTime) {
        this.addTime = addTime;
    }

    public Boolean getIsreceive() {
        return isreceive;
    }

    public void setIsreceive(Boolean isreceive) {
        this.isreceive = isreceive;
    }

    public String getMessageContent() {
        return messageContent;
    }

    public void setMessageContent(String messageContent) {
        this.messageContent = messageContent == null ? null : messageContent.trim();
    }
}
```
**dao/MessageMapper.java 增加一个成员函数**
```
List<UserMessage> message_queue(Integer user_id);
```
**resources/mapper/MessageMapper.xml 的mapper节点下添加两个子节点**
```
    <resultMap id="MessageMap" type="com.myqq.model.UserMessage">
        <id column="friend_id" property="friendId"/>
        <collection column="list" ofType="com.myqq.model.ListMessage" property="list">
            <result column="add_time" jdbcType="TIMESTAMP" property="addTime"/>
            <result column="isreceive" jdbcType="BIT" property="isreceive"/>
            <result column="message_content" jdbcType="LONGVARCHAR" property="messageContent"/>
        </collection>
    </resultMap>
    <select id="message_queue" parameterType="java.lang.Integer" resultMap="MessageMap">
        select friend_id, add_time, isreceive, message_content
        from messages
        where user_id = #{user_id,jdbcType=INTEGER}
    </select>
```
完了以后，执行message_queue函数就能通过用户id获取到按好友id分组的消息列表啦！
我们要继续写好service层和controller层才能够通过get url 获得结果！
**Message.Service**
```
package com.myqq.service;

import com.myqq.model.Message;
import com.myqq.model.UserMessage;

import java.util.List;

public interface MessageService {

    List<UserMessage> findMessageById(int user_id);

    int saveMessage(Message message);


    int updateMessage(Message message);

    int deleteMessage(int id);
}

```
**MessageServiceImpl**
```
package com.myqq.service.impl;

import com.myqq.dao.MessageMapper;
import com.myqq.model.Message;
import com.myqq.model.UserMessage;
import com.myqq.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageServiceImpl implements MessageService {

    @Autowired private MessageMapper messgeMapper;

    public List<UserMessage> findMessageById(int user_id) {
        return messgeMapper.message_queue(user_id);
    }

    public int saveMessage(Message message) {
        return messgeMapper.insertSelective(message);
    }


    public int updateMessage(Message message) {
        return messgeMapper.updateByPrimaryKeySelective(message);
    }

    public int deleteMessage(int id) {
        return messgeMapper.deleteByPrimaryKey(id);

    }
}
```
**MessageRestController**
```
package com.myqq.controller;

import com.myqq.model.Message;
import com.myqq.model.UserMessage;
import com.myqq.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class MessageRestController {
    @Autowired
    private MessageService messageService;

    @RequestMapping(value = "/api/message/{user_id}", method = RequestMethod.GET)
    public List<UserMessage> message_queue(@PathVariable("user_id") int user_id) {
        return messageService.findMessageById(user_id);
    }
    @RequestMapping(value = "/api/addmessage", method = RequestMethod.POST)
    public int addmessage(@RequestBody Message mes) {
        return messageService.saveMessage(mes);
    }

}
```
**写好以后，测试一波**
 http://localhost:8080/api/friends/1
![在这里插入图片描述](https://img-blog.csdnimg.cn/20181118033149250.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4MjU2NTYz,size_16,color_FFFFFF,t_70)
http://localhost:8080/api/message/1
![在这里插入图片描述](https://img-blog.csdnimg.cn/20181118033204826.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4MjU2NTYz,size_16,color_FFFFFF,t_70)
http://localhost:8080//api/addmessage
插入消息记录这里要发送post请求，我使用了postman这个软件，用起来非常简单，下载了你就会用的那种
![在这里插入图片描述](https://img-blog.csdnimg.cn/20181118033634979.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4MjU2NTYz,size_16,color_FFFFFF,t_70)
数据库中的数据也成功增加了一行
![在这里插入图片描述](https://img-blog.csdnimg.cn/20181118033755685.png)
okokokok，这样就差不多完成了基本的增删改查功能了！而登录注册需要jwt验证，机器人接口需要发送post请求，websocket需要另开一个ws协议，所以这篇博客也该告一段落了。

--------------------------------------------------
# 文末
**到目前为止的项目代码在此 [myqq之服务端—-github](https://github.com/zhangzibao/git/tree/master/myqq)
为了能让这篇博客被更多想从零开始学springboot的代码爱好者看懂，我是一边写着博客一边更新代码的呦
接下来的内容会在下一篇出现，虽然学业繁忙啊！但是我会尽快更新的！所以下一篇再见吧！**
### **（未完待续...敬请期待...）**
