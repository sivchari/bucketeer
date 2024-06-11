// Code generated by MockGen. DO NOT EDIT.
// Source: client.go
//
// Generated by this command:
//
//	mockgen -source=client.go -package=mock -destination=./mock/client.go
//

// Package mock is a generated GoMock package.
package mock

import (
	context "context"
	reflect "reflect"

	gomock "go.uber.org/mock/gomock"
	grpc "google.golang.org/grpc"

	eventcounter "github.com/bucketeer-io/bucketeer/proto/eventcounter"
)

// MockClient is a mock of Client interface.
type MockClient struct {
	ctrl     *gomock.Controller
	recorder *MockClientMockRecorder
}

// MockClientMockRecorder is the mock recorder for MockClient.
type MockClientMockRecorder struct {
	mock *MockClient
}

// NewMockClient creates a new mock instance.
func NewMockClient(ctrl *gomock.Controller) *MockClient {
	mock := &MockClient{ctrl: ctrl}
	mock.recorder = &MockClientMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockClient) EXPECT() *MockClientMockRecorder {
	return m.recorder
}

// Close mocks base method.
func (m *MockClient) Close() {
	m.ctrl.T.Helper()
	m.ctrl.Call(m, "Close")
}

// Close indicates an expected call of Close.
func (mr *MockClientMockRecorder) Close() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Close", reflect.TypeOf((*MockClient)(nil).Close))
}

// GetEvaluationTimeseriesCount mocks base method.
func (m *MockClient) GetEvaluationTimeseriesCount(ctx context.Context, in *eventcounter.GetEvaluationTimeseriesCountRequest, opts ...grpc.CallOption) (*eventcounter.GetEvaluationTimeseriesCountResponse, error) {
	m.ctrl.T.Helper()
	varargs := []any{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "GetEvaluationTimeseriesCount", varargs...)
	ret0, _ := ret[0].(*eventcounter.GetEvaluationTimeseriesCountResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetEvaluationTimeseriesCount indicates an expected call of GetEvaluationTimeseriesCount.
func (mr *MockClientMockRecorder) GetEvaluationTimeseriesCount(ctx, in any, opts ...any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]any{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetEvaluationTimeseriesCount", reflect.TypeOf((*MockClient)(nil).GetEvaluationTimeseriesCount), varargs...)
}

// GetExperimentEvaluationCount mocks base method.
func (m *MockClient) GetExperimentEvaluationCount(ctx context.Context, in *eventcounter.GetExperimentEvaluationCountRequest, opts ...grpc.CallOption) (*eventcounter.GetExperimentEvaluationCountResponse, error) {
	m.ctrl.T.Helper()
	varargs := []any{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "GetExperimentEvaluationCount", varargs...)
	ret0, _ := ret[0].(*eventcounter.GetExperimentEvaluationCountResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetExperimentEvaluationCount indicates an expected call of GetExperimentEvaluationCount.
func (mr *MockClientMockRecorder) GetExperimentEvaluationCount(ctx, in any, opts ...any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]any{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetExperimentEvaluationCount", reflect.TypeOf((*MockClient)(nil).GetExperimentEvaluationCount), varargs...)
}

// GetExperimentGoalCount mocks base method.
func (m *MockClient) GetExperimentGoalCount(ctx context.Context, in *eventcounter.GetExperimentGoalCountRequest, opts ...grpc.CallOption) (*eventcounter.GetExperimentGoalCountResponse, error) {
	m.ctrl.T.Helper()
	varargs := []any{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "GetExperimentGoalCount", varargs...)
	ret0, _ := ret[0].(*eventcounter.GetExperimentGoalCountResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetExperimentGoalCount indicates an expected call of GetExperimentGoalCount.
func (mr *MockClientMockRecorder) GetExperimentGoalCount(ctx, in any, opts ...any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]any{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetExperimentGoalCount", reflect.TypeOf((*MockClient)(nil).GetExperimentGoalCount), varargs...)
}

// GetExperimentResult mocks base method.
func (m *MockClient) GetExperimentResult(ctx context.Context, in *eventcounter.GetExperimentResultRequest, opts ...grpc.CallOption) (*eventcounter.GetExperimentResultResponse, error) {
	m.ctrl.T.Helper()
	varargs := []any{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "GetExperimentResult", varargs...)
	ret0, _ := ret[0].(*eventcounter.GetExperimentResultResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetExperimentResult indicates an expected call of GetExperimentResult.
func (mr *MockClientMockRecorder) GetExperimentResult(ctx, in any, opts ...any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]any{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetExperimentResult", reflect.TypeOf((*MockClient)(nil).GetExperimentResult), varargs...)
}

// GetMAUCount mocks base method.
func (m *MockClient) GetMAUCount(ctx context.Context, in *eventcounter.GetMAUCountRequest, opts ...grpc.CallOption) (*eventcounter.GetMAUCountResponse, error) {
	m.ctrl.T.Helper()
	varargs := []any{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "GetMAUCount", varargs...)
	ret0, _ := ret[0].(*eventcounter.GetMAUCountResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetMAUCount indicates an expected call of GetMAUCount.
func (mr *MockClientMockRecorder) GetMAUCount(ctx, in any, opts ...any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]any{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetMAUCount", reflect.TypeOf((*MockClient)(nil).GetMAUCount), varargs...)
}

// GetOpsEvaluationUserCount mocks base method.
func (m *MockClient) GetOpsEvaluationUserCount(ctx context.Context, in *eventcounter.GetOpsEvaluationUserCountRequest, opts ...grpc.CallOption) (*eventcounter.GetOpsEvaluationUserCountResponse, error) {
	m.ctrl.T.Helper()
	varargs := []any{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "GetOpsEvaluationUserCount", varargs...)
	ret0, _ := ret[0].(*eventcounter.GetOpsEvaluationUserCountResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetOpsEvaluationUserCount indicates an expected call of GetOpsEvaluationUserCount.
func (mr *MockClientMockRecorder) GetOpsEvaluationUserCount(ctx, in any, opts ...any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]any{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetOpsEvaluationUserCount", reflect.TypeOf((*MockClient)(nil).GetOpsEvaluationUserCount), varargs...)
}

// GetOpsGoalUserCount mocks base method.
func (m *MockClient) GetOpsGoalUserCount(ctx context.Context, in *eventcounter.GetOpsGoalUserCountRequest, opts ...grpc.CallOption) (*eventcounter.GetOpsGoalUserCountResponse, error) {
	m.ctrl.T.Helper()
	varargs := []any{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "GetOpsGoalUserCount", varargs...)
	ret0, _ := ret[0].(*eventcounter.GetOpsGoalUserCountResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetOpsGoalUserCount indicates an expected call of GetOpsGoalUserCount.
func (mr *MockClientMockRecorder) GetOpsGoalUserCount(ctx, in any, opts ...any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]any{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetOpsGoalUserCount", reflect.TypeOf((*MockClient)(nil).GetOpsGoalUserCount), varargs...)
}

// ListExperimentResults mocks base method.
func (m *MockClient) ListExperimentResults(ctx context.Context, in *eventcounter.ListExperimentResultsRequest, opts ...grpc.CallOption) (*eventcounter.ListExperimentResultsResponse, error) {
	m.ctrl.T.Helper()
	varargs := []any{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "ListExperimentResults", varargs...)
	ret0, _ := ret[0].(*eventcounter.ListExperimentResultsResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ListExperimentResults indicates an expected call of ListExperimentResults.
func (mr *MockClientMockRecorder) ListExperimentResults(ctx, in any, opts ...any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]any{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ListExperimentResults", reflect.TypeOf((*MockClient)(nil).ListExperimentResults), varargs...)
}

// SummarizeMAUCounts mocks base method.
func (m *MockClient) SummarizeMAUCounts(ctx context.Context, in *eventcounter.SummarizeMAUCountsRequest, opts ...grpc.CallOption) (*eventcounter.SummarizeMAUCountsResponse, error) {
	m.ctrl.T.Helper()
	varargs := []any{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "SummarizeMAUCounts", varargs...)
	ret0, _ := ret[0].(*eventcounter.SummarizeMAUCountsResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// SummarizeMAUCounts indicates an expected call of SummarizeMAUCounts.
func (mr *MockClientMockRecorder) SummarizeMAUCounts(ctx, in any, opts ...any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]any{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "SummarizeMAUCounts", reflect.TypeOf((*MockClient)(nil).SummarizeMAUCounts), varargs...)
}
