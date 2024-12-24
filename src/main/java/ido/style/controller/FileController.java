package ido.style.controller;

import ido.style.dto.FileDTO;
import ido.style.mapper.FileMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

// category.html에 상품 이미지 보여주는 역할
@Controller
public class FileController {
    @Autowired private FileMapper fileMapper;
    
    @GetMapping("/image/{imageNo}")
    public ResponseEntity<byte[]> get_product_image(
            @PathVariable Integer imageNo
    ) {
        FileDTO fileDTO = fileMapper.getImageFileByNo(imageNo);
        byte[] data = fileDTO.getData();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_JPEG);
        headers.setContentLength(data.length);
        
        return ResponseEntity.ok()
                .headers(headers)
                .body(data);
    }
}
