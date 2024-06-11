// Code generated by MockGen. DO NOT EDIT.
// Source: push.go
//
// Generated by this command:
//
//	mockgen -source=push.go -package=mock -destination=./mock/push.go
//

// Package mock is a generated GoMock package.
package mock

import (
	context "context"
	reflect "reflect"

	gomock "go.uber.org/mock/gomock"

	domain "github.com/bucketeer-io/bucketeer/pkg/push/domain"
	mysql "github.com/bucketeer-io/bucketeer/pkg/storage/v2/mysql"
	push "github.com/bucketeer-io/bucketeer/proto/push"
)

// MockPushStorage is a mock of PushStorage interface.
type MockPushStorage struct {
	ctrl     *gomock.Controller
	recorder *MockPushStorageMockRecorder
}

// MockPushStorageMockRecorder is the mock recorder for MockPushStorage.
type MockPushStorageMockRecorder struct {
	mock *MockPushStorage
}

// NewMockPushStorage creates a new mock instance.
func NewMockPushStorage(ctrl *gomock.Controller) *MockPushStorage {
	mock := &MockPushStorage{ctrl: ctrl}
	mock.recorder = &MockPushStorageMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockPushStorage) EXPECT() *MockPushStorageMockRecorder {
	return m.recorder
}

// CreatePush mocks base method.
func (m *MockPushStorage) CreatePush(ctx context.Context, e *domain.Push, environmentNamespace string) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "CreatePush", ctx, e, environmentNamespace)
	ret0, _ := ret[0].(error)
	return ret0
}

// CreatePush indicates an expected call of CreatePush.
func (mr *MockPushStorageMockRecorder) CreatePush(ctx, e, environmentNamespace any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "CreatePush", reflect.TypeOf((*MockPushStorage)(nil).CreatePush), ctx, e, environmentNamespace)
}

// GetPush mocks base method.
func (m *MockPushStorage) GetPush(ctx context.Context, id, environmentNamespace string) (*domain.Push, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetPush", ctx, id, environmentNamespace)
	ret0, _ := ret[0].(*domain.Push)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetPush indicates an expected call of GetPush.
func (mr *MockPushStorageMockRecorder) GetPush(ctx, id, environmentNamespace any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetPush", reflect.TypeOf((*MockPushStorage)(nil).GetPush), ctx, id, environmentNamespace)
}

// ListPushes mocks base method.
func (m *MockPushStorage) ListPushes(ctx context.Context, whereParts []mysql.WherePart, orders []*mysql.Order, limit, offset int) ([]*push.Push, int, int64, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "ListPushes", ctx, whereParts, orders, limit, offset)
	ret0, _ := ret[0].([]*push.Push)
	ret1, _ := ret[1].(int)
	ret2, _ := ret[2].(int64)
	ret3, _ := ret[3].(error)
	return ret0, ret1, ret2, ret3
}

// ListPushes indicates an expected call of ListPushes.
func (mr *MockPushStorageMockRecorder) ListPushes(ctx, whereParts, orders, limit, offset any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ListPushes", reflect.TypeOf((*MockPushStorage)(nil).ListPushes), ctx, whereParts, orders, limit, offset)
}

// UpdatePush mocks base method.
func (m *MockPushStorage) UpdatePush(ctx context.Context, e *domain.Push, environmentNamespace string) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "UpdatePush", ctx, e, environmentNamespace)
	ret0, _ := ret[0].(error)
	return ret0
}

// UpdatePush indicates an expected call of UpdatePush.
func (mr *MockPushStorageMockRecorder) UpdatePush(ctx, e, environmentNamespace any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "UpdatePush", reflect.TypeOf((*MockPushStorage)(nil).UpdatePush), ctx, e, environmentNamespace)
}
