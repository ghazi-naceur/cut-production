package com.cut.production.services;

import com.cut.production.entities.DataFiles;

import java.util.List;

/**
 * Created by Ghazi Naceur on 24/04/2019
 * Email: ghazi.ennacer@gmail.com
 */
public interface DataFileService {

    List<String> saveDataFile(DataFiles dataFiles);
}
