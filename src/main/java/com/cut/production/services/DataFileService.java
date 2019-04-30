package com.cut.production.services;

import com.cut.production.entities.DataFiles;

import java.util.List;

public interface DataFileService {

    List<String> saveDataFile(DataFiles dataFiles);
}
