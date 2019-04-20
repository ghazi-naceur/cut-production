# Cut Production

A project about stuff and things w katha ...

### Prerequisites

 Java 8 <br/>
 Elasticsearch 6.5.4 <br/>
 Angular 7 <br/>
 Spring Boot 1.5 or Higher <br/>
 Maven 3.3.3 or higher <br/>
 .NET Framework 4.0 <br/>

### Build
#### Backend
1- Generate package : <br/>
    > `mvn clean package -Pwinsvc` <br/>
2- Install WINSW : <br/>
    > `mvn install -Pwinsvc`

#### Frontend
1- Generate package : <br/>
    > `ng build`

### Packaging
#### Backend
- Copy the generated backend files from `cut-production\dist\service` to a folder for deliveries, let's call it `release-x.0` => `release-x.0\backend`.
#### Frontend
- Download nginx server from : `http://nginx.org/en/docs/windows.html`. After that, extract it and put it under the `release-x.0\frontend` folder. <br/>
- Download nssm from : `https://nssm.cc/download`. After that, extract it and put it in the `release-x.0\frontend\nginx\service` folder. <br/>
- Copy the generated frontend files from `cut-production\src\main\webapp\cut-production-interface\dist\ng-app` to the same deliveries folder => `release-x.0\frontend\nginx\html`. <br/>

### Installation
#### Backend
1- Open a cmd console as an administrator. <br/>
2- Go to `release-x.0\backend` <br/>
3- Run the following command : <br/>
    > `cut-production.exe install`

#### Frontend
1- Go to `release-x.0\frontend\nginx\service` <br/>
2- Modify the config file `release-x.0\frontend\nginx\conf\nginx.conf` as follows : <br/>
```
	server {
        listen       4200;
        server_name  localhost;

        location / {
            root   html;
            index  index.html index.htm;
			try_files $uri $uri/ /index.html;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
```
3- Run the following command : <br/>
    > `nssm install nginx` <br/>
4- Specify the path of "nginx.exe", which is `cut-production-v1.0-beta\frontend\nginx`

### Run
1- Start Elasticsearch 6.5.4 <br/>
2- Open Windows Services <br/>
3- Search for `cut-production` service and start it <br/>
4- Search for `nginx` service and start it <br/>
5- Enter the url : http://localhost:4200/login

###### Note :
In order to uninstall the backend service, you can run : <br/>
    > `cut-production.exe uninstall` <br/>
In order to uninstall the frontend service, you can run : <br/>
    > `sc delete nginx` <br/>