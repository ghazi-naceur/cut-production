package com.cut.production.utils;

import java.util.HashMap;
import java.util.Map;

public class Constants {

    private Constants() {
        super();
    }

    public static final String USER_INDEX = "users";
    public static final String USER_TYPE = "user";
    public static final String ORDER_INDEX = "orders";
    public static final String ORDER_TYPE = "order";
    public static final String CUT_PLANNING_INDEX = "cut_plannings";
    public static final String CUT_PLANNING_TYPE = "cut_planning";
    public static final String WEEK_WORK_INDEX = "weekly_work";
    public static final String WEEK_WORK_TYPE = "task";
    public static final String WEEK_WORK_ID = "task";
    public static final String NEXT_WEEK_WORK_ID = "next_task";
    public static final String CURRENT_WEEK_TASKS_FIELD = "currentWeekTasks";
    public static final String NEXT_WEEK_TASKS_FIELD = "nextWeekTasks";
//    public static final String NEXT_WEEK_TASKS_FIELD = "nextWeekTasksList";
//    public static final String CUT_PLANNING_MAPPING = "{ \"properties\": { \"absenteeismRate\" : { \"type\" : \"long\" }, \"article\" : { \"type\" : \"text\" }, \"client\" : { \"type\" : \"text\" }, \"commandNumber\" : { \"type\" : \"text\" }, \"effective\" : { \"type\" : \"long\" }, \"efficiency\" : { \"type\" : \"float\" }, \"exportDate\" : { \"type\" : \"date\" }, \"id\" : { \"type\" : \"text\" }, \"model\" : { \"type\" : \"text\" }, \"planningWeek\" : { \"type\" : \"long\" }, \"quantity\" : { \"type\" : \"long\" } } }";
    public static final String CUT_PLANNING_MAPPING = "{\n \"properties\": {\n \"absenteeismRate\" : {\n \"type\" : \"long\"\n },\n \"article\" : {\n \"type\" : \"text\"\n },\n \"client\" : {\n \"type\" : \"text\"\n },\n \"commandNumber\" : {\n \"type\" : \"text\"\n },\n \"effective\" : {\n \"type\" : \"long\"\n },\n \"efficiency\" : {\n \"type\" : \"float\"\n },\n \"exportDate\" : {\n \"type\" : \"date\"\n },\n \"id\" : {\n \"type\" : \"text\"\n },\n \"model\" : {\n \"type\" : \"text\"\n },\n \"planningWeek\" : {\n \"type\" : \"long\"\n },\n \"quantity\" : {\n \"type\" : \"long\"\n }\n }\n }";

}
