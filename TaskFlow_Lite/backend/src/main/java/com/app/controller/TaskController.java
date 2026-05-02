
package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.app.model.Task;
import com.app.repository.TaskRepository;

@RestController
@CrossOrigin
@RequestMapping("/tasks")
public class TaskController {

    @Autowired
    private TaskRepository repo;

    @GetMapping
    public List<Task> getAll() {
        return repo.findAll();
    }

    @PostMapping
    public Task add(@RequestBody Task task) {
        return repo.save(task);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        repo.deleteById(id);
    }

    @PutMapping("/{id}")
    public Task markCompleted(@PathVariable Long id) {
        Task task = repo.findById(id).orElseThrow();
        task.setStatus("COMPLETED");
        return repo.save(task);
    }
}
