package aal.com.servlet;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class HtmlServlet extends HttpServlet{

/**
* 
*/
private static final long serialVersionUID = 1L;
private String message;
private static final String PREFIX = "/assets/js/mobile/app/";
private static final String SUFFIX = ".js";
 public void init() throws ServletException
 {
     message = "Hello World";
 }

 public void doGet(HttpServletRequest request,
                   HttpServletResponse response)
           throws ServletException, IOException
 {
     //response.setContentType("text/html");
     ServletContext sc=getServletContext();
     String urlSplit[]=request.getRequestURI().split("/");
     String fileName=urlSplit[urlSplit.length-1];
     String fileType=fileName.split("\\.")[1];
     String filePath;
     if(fileType.equalsIgnoreCase("html")){
    	 	if(fileName.startsWith("a1")){
	    	 	if(fileName.startsWith("a1cd")){
	    	 		filePath="/WEB-INF/assets/html/angular1/directive/"+fileName;
	    	 	}
	    	 	else if(fileName.startsWith("a1cf")){
	    	 		filePath="/WEB-INF/assets/html/angular1/filter/"+fileName;
	    	 	}
	    	 	else if(fileName.startsWith("a1exmp")){
	    	 		filePath="/WEB-INF/assets/html/angular1/example/"+fileName;
	    	 	}
	    	 	else{
	    	 		filePath="/WEB-INF/assets/html/angular1/core/"+fileName;
	    	 	}
    	 	}
    	 	else{
    	 		filePath="/WEB-INF/assets/html/common/"+fileName;
    	 	}
     }
     else if(fileType.equalsIgnoreCase("css")){
    	 filePath="/WEB-INF/assets/css/"+fileName;
     }
     else if(fileType.equalsIgnoreCase("js")){
    	 if(fileName.contains("app")){
    		 filePath="/WEB-INF/assets/js/common/"+fileName;
    	 }
    	 else if(fileName.contains("Controller")){
    		 filePath="/WEB-INF/assets/js/controller/"+fileName;
    	 }else{
    		 filePath="/WEB-INF/assets/js/lib/"+fileName;
    	 }
     }
     else if(fileType.equalsIgnoreCase("json")){
    	 filePath="/WEB-INF/assets/json/"+fileName;
     }
     else{
    	 filePath="/WEB-INF/assets/"+"image"+"/"+fileName;
     }
     
     InputStream is=sc.getResourceAsStream(filePath);
 
     ServletOutputStream out = response.getOutputStream();
     
int i = 0;
while ((i = is.read()) != -1) {
out.write(i);
}
out.flush();
is.close();
out.close();
     
 }
 
 public void destroy()
 {
 }
}

