package com.cut.production.services;

import com.cut.production.entities.DataFiles;
import com.cut.production.repository.EntityRepository;
import com.cut.production.utils.FileHelper;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.*;

import static com.cut.production.utils.Constants.ORDER_INDEX;
import static com.cut.production.utils.Constants.ORDER_TYPE;

@Service
public class DataFileServiceImpl implements DataFileService {

    private static Logger logger = LoggerFactory.getLogger(DataFileServiceImpl.class.getName());

    @Autowired
    private EntityRepository repo;

    @Override
    public List<String> saveDataFile(DataFiles dataFiles) {
        List<String> processedFiles = new ArrayList<>();
        try {
            Collection<File> files = FileHelper.listFilesInFolder(new File(dataFiles.getPath()));
            for (File file : files) {
                processedFiles.add(file.getAbsolutePath());
                process(file.getAbsolutePath()).forEach(map -> {
                    if (repo.isEntityExist(ORDER_INDEX, ORDER_TYPE, map)) {
                        logger.warn("This entity is already stored.");
                    } else {
                        try {
                            String id = UUID.randomUUID().toString();
                            map.put("id", id);
                            repo.indexEntity(ORDER_INDEX, ORDER_TYPE, id, map);
                        } catch (IOException e) {
                            e.printStackTrace();
                        }
                    }
                });
            }
            return processedFiles;
        } catch (Exception e) {
            logger.error("Error occurred when trying to save the data file from the path {} caused by : {}", dataFiles.getPath(), e);
        }
        return Collections.emptyList();
    }


    public List<Map<String, Object>> process(String path) {
        try {
            FileInputStream inputStream = new FileInputStream(new File(path));
            Workbook workbook = FileHelper.getRelevantWorkbook(inputStream, path);
            Sheet firstSheet = workbook.getSheetAt(0);
            workbook.close();
            inputStream.close();
            return FileHelper.toCSV(firstSheet);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }
}
