package com.cut.production.utils;

import com.cut.production.entities.CutPlanning;
import com.cut.production.entities.Order;
import com.cut.production.entities.User;
import com.cut.production.entities.WeekWork;

import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

public final class Matcher {

    private Matcher() {
        super();
    }

    public static final Map<String, Class> MAPPER;
    public static final Map<Class, String> INVERTED_MAPPER;
    static {
        MAPPER = new HashMap<>();
        MAPPER.put(Constants.ORDER_INDEX, Order.class);
        MAPPER.put(Constants.USER_INDEX, User.class);
        MAPPER.put(Constants.CUT_PLANNING_INDEX, CutPlanning.class);
        MAPPER.put(Constants.WEEK_WORK_INDEX, WeekWork.class);
        INVERTED_MAPPER = getInvertedMapper();
    }

    private static Map<Class, String> getInvertedMapper() {
        return MAPPER.entrySet()
                .stream()
                .collect(Collectors.toMap(Map.Entry::getValue, Map.Entry::getKey));
    }
}
