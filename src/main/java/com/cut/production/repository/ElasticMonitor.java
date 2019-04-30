package com.cut.production.repository;

import com.cut.production.utils.Constants;
import org.elasticsearch.action.admin.indices.create.CreateIndexRequest;
import org.elasticsearch.action.admin.indices.get.GetIndexRequest;
import org.elasticsearch.client.IndicesClient;
import org.elasticsearch.client.RequestOptions;
import org.elasticsearch.client.RestHighLevelClient;
import org.elasticsearch.common.xcontent.XContentType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.elasticsearch.core.ElasticsearchOperations;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

import static com.cut.production.utils.Constants.*;

/**
 */
@Service
public class ElasticMonitor {

    private static Logger logger = LoggerFactory.getLogger(ElasticMonitor.class.getName());

    @Autowired
    ElasticsearchOperations elasticAgent;

    RestHighLevelClient client;

    public ElasticMonitor(RestHighLevelClient client) {
        this.client = client;
    }

    public List<String> getIndicesList() {
        return Arrays.asList(elasticAgent.getClient().admin()
                .indices()
                .getIndex(new GetIndexRequest())
                .actionGet()
                .getIndices());
    }

    public void createIndex(String index) {

        try {
            if (index.equals(Constants.CUT_PLANNING_INDEX)) {
                CreateIndexRequest request = new CreateIndexRequest(index);
                IndicesClient indices = client.indices();
                request.mapping(CUT_PLANNING_TYPE, CUT_PLANNING_MAPPING, XContentType.JSON);
                indices.create(request, RequestOptions.DEFAULT);
            } else if (index.equals(Constants.PRODUCTION_PLANNING_INDEX)) {
                CreateIndexRequest request = new CreateIndexRequest(index);
                IndicesClient indices = client.indices();
                request.mapping(PRODUCTION_PLANNING_TYPE, PRODUCTION_PLANNING_MAPPING, XContentType.JSON);
                indices.create(request, RequestOptions.DEFAULT);
            } else {
                CreateIndexRequest request = new CreateIndexRequest(index);
                IndicesClient indices = client.indices();
                indices.create(request, RequestOptions.DEFAULT);
            }
            logger.info("The index {} is created ..", index);
        } catch (Exception e) {
            logger.error("An error occurred when trying to create index {} : {} ", index, e);
        }
    }
}
