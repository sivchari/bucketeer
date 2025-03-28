SELECT
    COUNT(DISTINCT feature.id)
FROM
    feature
LEFT OUTER JOIN
    feature_last_used_info
ON
    feature.id = feature_last_used_info.feature_id AND
    feature.environment_id = feature_last_used_info.environment_id
LEFT OUTER JOIN
    experiment
ON
    feature.id = experiment.feature_id AND
    feature.environment_id = experiment.environment_id
%s