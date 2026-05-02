
package com.app.model;
import jakarta.persistence.*;

@Entity
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String status;

    public Long getId(){return id;}
    public String getTitle(){return title;}
    public void setTitle(String t){this.title=t;}
    public String getStatus(){return status;}
    public void setStatus(String s){this.status=s;}
}
