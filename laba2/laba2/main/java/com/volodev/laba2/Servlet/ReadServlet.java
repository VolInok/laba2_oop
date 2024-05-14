package com.dinh.laba2.Servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import jakarta.servlet.ServletContext;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/read")
public class ReadServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ServletContext sc = getServletContext();
        sc.getRequestDispatcher("/jsp/read.jsp").forward(request, response);
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String pathStr = "C:\\Users\\elena\\Desktop\\laba2\\src\\main\\webapp\\data.json";
        Path path = Paths.get(pathStr);
        response.setContentType("application/json");
        String jsonArrayString = "";
        if (Files.exists(path)) {
            jsonArrayString = Files.readString(path);
        }
        PrintWriter out = response.getWriter();
        out.print(jsonArrayString);
        out.close();
    }
}