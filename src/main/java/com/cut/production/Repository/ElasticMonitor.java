package com.cut.production.Repository;

import com.cut.production.utils.Constants;
import org.elasticsearch.action.ActionListener;
import org.elasticsearch.action.admin.indices.create.CreateIndexRequest;
import org.elasticsearch.action.admin.indices.create.CreateIndexResponse;
import org.elasticsearch.action.admin.indices.get.GetIndexRequest;
import org.elasticsearch.action.admin.indices.mapping.put.PutMappingRequest;
import org.elasticsearch.action.admin.indices.mapping.put.PutMappingResponse;
import org.elasticsearch.client.IndicesAdminClient;
import org.elasticsearch.common.xcontent.XContentType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.elasticsearch.core.ElasticsearchOperations;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

import static com.cut.production.utils.Constants.CUT_PLANNING_MAPPING;
import static com.cut.production.utils.Constants.CUT_PLANNING_TYPE;

/**
 * Created by Ghazi Naceur on 16/04/2019
 * Email: ghazi.ennacer@gmail.com
 */
@Service
public class ElasticMonitor {

    private static Logger logger = LoggerFactory.getLogger(ElasticMonitor.class.getName());

    @Autowired
    ElasticsearchOperations elasticAgent;

    public List<String> getIndicesList() {
        return Arrays.asList(elasticAgent.getClient().admin()
                .indices()
                .getIndex(new GetIndexRequest())
                .actionGet()
                .getIndices());
    }

    public void createIndex(String index) {

        ActionListener<CreateIndexResponse> listener =
                new ActionListener<CreateIndexResponse>() {

                    @Override
                    public void onResponse(CreateIndexResponse createIndexResponse) {
                        logger.info("The index {} is created ..", createIndexResponse.index());
                    }

                    @Override
                    public void onFailure(Exception e) {
                        logger.info("An error occurred when trying to create index : {} ", e);

                    }
                };

        if (index.equals(Constants.CUT_PLANNING_INDEX)) {

            CreateIndexRequest request = new CreateIndexRequest(index);
            IndicesAdminClient indices = elasticAgent.getClient().admin().indices();
            request.mapping(CUT_PLANNING_TYPE, CUT_PLANNING_MAPPING, XContentType.JSON);
            indices.create(request, listener);
        } else {
            CreateIndexRequest request = new CreateIndexRequest(index);
            IndicesAdminClient indices = elasticAgent.getClient().admin().indices();
            indices.create(request, listener);
        }
    }
}
