package com.ernestofernandezdev.portfolio_api;

import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.IOException;

@Controller
@RequestMapping("/api")
public class WebhookController {
    @PostMapping("/deploy")
    public ResponseEntity<String> deploy(@RequestBody JsonNode payload) {
        try {
            String imageName = payload.at("/push_data/repository/name").asText();
            String tag = payload.at("/push_data/tag").asText();

            ProcessBuilder processBuilder = new ProcessBuilder(
                    "bash", "-c", String.format("/opt/deploy.sh %s %s", imageName, tag)
            );
            processBuilder.inheritIO();
            Process process = processBuilder.start();
            int exitCode = process.waitFor();
            if (exitCode == 0) {
                return ResponseEntity.ok("Imagen actualizada con éxito");
            } else {
                return ResponseEntity.status(500).body("Error al ejecutar el script de actualización");
            }
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Error al procesar el webhook: " + e.getMessage());
        }
    }

    @GetMapping("/test")
    public ResponseEntity<String> test() {
        return ResponseEntity.ok("Funciona!");
    }
}
