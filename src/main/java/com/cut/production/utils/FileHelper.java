package com.cut.production.utils;

import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.*;
import java.util.*;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.stream.Collectors;

import static com.cut.production.utils.Constants.COMMA_SEPARATOR;

/**
 * Created by Ghazi Naceur on 24/04/2019
 * Email: ghazi.ennacer@gmail.com
 */

public final class FileHelper {

    private FileHelper() {
        super();
    }

    public static List<Map<String, Object>> processCSVFile(String path) throws IOException {

        List<Map<String, Object>> entities = new ArrayList<>();
        Map<String, Object> entity;
        String[] keys;
        List<String[]> values = new ArrayList<>();
        File file = new File(path);
        InputStream inputStream = new FileInputStream(file);
        BufferedReader br = new BufferedReader(new InputStreamReader(inputStream));
        keys = br.readLine().split(COMMA_SEPARATOR);
        List<String> valueLines = br.lines().collect(Collectors.toList());

        for (String line : valueLines) {
            values.add(line.split(COMMA_SEPARATOR));
        }

        for (String[] value : values) {
            //  if value contains a float value (with a , ), we will obtain an
            //          and ArrayOutOffBoundException because value.length > keys.length
            //          or we can loop on keys : for (int i = 0; i < keys.length; i++)
            //          but the problem, we will loose the column with no header
            entity = new HashMap<>();
            for (int i = 0; i < value.length; i++) {
                entity.put(keys[i], value[i]);
            }
            entities.add(entity);
        }
        br.close();
        return entities;
    }

    public static Workbook getRelevantWorkbook(FileInputStream inputStream, String excelFilePath) throws IOException {
        Workbook workbook = null;
        if (excelFilePath.toLowerCase().endsWith("xls")) {
            workbook = new HSSFWorkbook(inputStream);
        } else if (excelFilePath.toLowerCase().endsWith("xlsx")) {
            workbook = new XSSFWorkbook(inputStream);
        } else {
            throw new IllegalArgumentException("Incorrect file format");
        }
        return workbook;
    }

    public static List<Map<String, Object>> toCSV(Sheet sheet) {
        Row row = null;
        String resultedCsv = "";

        List<String[]> values = new ArrayList<>();
        List<Map<String, Object>> entities = new ArrayList<>();
        Map<String, Object> entity;
        for (int i = 0; i < sheet.getLastRowNum() + 1; i++) {
            row = sheet.getRow(i);
            List<String> fields = new ArrayList<>();
            for (int j = 0; j < row.getLastCellNum(); j++) {
                fields.add(row.getCell(j).toString());
            }
            resultedCsv += String.join(",", fields) + "\n";
        }
        System.out.println(resultedCsv);

        List<String> strings = Arrays.asList(resultedCsv.split("\n"));
        List<String> lines = new CopyOnWriteArrayList<>(strings);
        String[] keys = lines.get(0).split(",");
        String[] mappedKeys = mapKeys(keys);
        lines.remove(0);
        for (String line : lines) {
            values.add(line.split(COMMA_SEPARATOR));
        }

        for (String[] value : values) {
            //  if value contains a float value (with a , ), we will obtain an
            //          and ArrayOutOffBoundException because value.length > keys.length
            //          or we can loop on keys : for (int i = 0; i < keys.length; i++)
            //          but the problem, we will loose the column with no header
            entity = new HashMap<>();
            for (int i = 0; i < value.length; i++) {
                if (value[i].contains(",")) {
                    String replace = value[i].replace(",", ".");
                    entity.put(mappedKeys[i], replace);
                } else {
                    entity.put(mappedKeys[i], value[i]);
                }
            }
            entities.add(entity);
        }

        return entities;
    }

    private static String[] mapKeys(String[] keys) {
        String[] mappedKeys = new String[]{"", "", "", "", ""};
        for (String key : keys) {
            if (key.equals("Client")) {
                mappedKeys[0] = "client";
            } else if (key.equals("Modèle")) {
                mappedKeys[1] = "model";
            } else if (key.equals("Article")) {
                mappedKeys[2] = "article";
            } else if (key.equals("MIN.COUPE")) {
                mappedKeys[3] = "minCut";
            } else if (key.equals("MIN.CONF")) {
                mappedKeys[4] = "minConfection";
            }
        }
        return mappedKeys;
    }

    public static Collection<File> listFilesInFolder(File directory) {
        File[] files = directory.listFiles();
        if (files != null) {
            List<File> result = new ArrayList<>();

            for (File file : files) {
                if (file.isFile()) {
                    result.add(file);
                } else if (file.isDirectory()) {
                    result.addAll(listFilesInFolder(new File(file.getAbsolutePath())));
                }
            }
            return result;
        } else {
            return Collections.emptyList();
        }
    }
}
