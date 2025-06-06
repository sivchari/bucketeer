// Code generated by MockGen. DO NOT EDIT.
// Source: admin_subscription.go
//
// Generated by this command:
//
//	mockgen -source=admin_subscription.go -package=mock -destination=./mock/admin_subscription.go
//

// Package mock is a generated GoMock package.
package mock

import (
	context "context"
	reflect "reflect"

	gomock "go.uber.org/mock/gomock"

	domain "github.com/bucketeer-io/bucketeer/pkg/notification/domain"
	mysql "github.com/bucketeer-io/bucketeer/pkg/storage/v2/mysql"
	notification "github.com/bucketeer-io/bucketeer/proto/notification"
)

// MockAdminSubscriptionStorage is a mock of AdminSubscriptionStorage interface.
type MockAdminSubscriptionStorage struct {
	ctrl     *gomock.Controller
	recorder *MockAdminSubscriptionStorageMockRecorder
}

// MockAdminSubscriptionStorageMockRecorder is the mock recorder for MockAdminSubscriptionStorage.
type MockAdminSubscriptionStorageMockRecorder struct {
	mock *MockAdminSubscriptionStorage
}

// NewMockAdminSubscriptionStorage creates a new mock instance.
func NewMockAdminSubscriptionStorage(ctrl *gomock.Controller) *MockAdminSubscriptionStorage {
	mock := &MockAdminSubscriptionStorage{ctrl: ctrl}
	mock.recorder = &MockAdminSubscriptionStorageMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockAdminSubscriptionStorage) EXPECT() *MockAdminSubscriptionStorageMockRecorder {
	return m.recorder
}

// CreateAdminSubscription mocks base method.
func (m *MockAdminSubscriptionStorage) CreateAdminSubscription(ctx context.Context, e *domain.Subscription) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "CreateAdminSubscription", ctx, e)
	ret0, _ := ret[0].(error)
	return ret0
}

// CreateAdminSubscription indicates an expected call of CreateAdminSubscription.
func (mr *MockAdminSubscriptionStorageMockRecorder) CreateAdminSubscription(ctx, e any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "CreateAdminSubscription", reflect.TypeOf((*MockAdminSubscriptionStorage)(nil).CreateAdminSubscription), ctx, e)
}

// DeleteAdminSubscription mocks base method.
func (m *MockAdminSubscriptionStorage) DeleteAdminSubscription(ctx context.Context, id string) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "DeleteAdminSubscription", ctx, id)
	ret0, _ := ret[0].(error)
	return ret0
}

// DeleteAdminSubscription indicates an expected call of DeleteAdminSubscription.
func (mr *MockAdminSubscriptionStorageMockRecorder) DeleteAdminSubscription(ctx, id any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "DeleteAdminSubscription", reflect.TypeOf((*MockAdminSubscriptionStorage)(nil).DeleteAdminSubscription), ctx, id)
}

// GetAdminSubscription mocks base method.
func (m *MockAdminSubscriptionStorage) GetAdminSubscription(ctx context.Context, id string) (*domain.Subscription, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetAdminSubscription", ctx, id)
	ret0, _ := ret[0].(*domain.Subscription)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetAdminSubscription indicates an expected call of GetAdminSubscription.
func (mr *MockAdminSubscriptionStorageMockRecorder) GetAdminSubscription(ctx, id any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetAdminSubscription", reflect.TypeOf((*MockAdminSubscriptionStorage)(nil).GetAdminSubscription), ctx, id)
}

// ListAdminSubscriptions mocks base method.
func (m *MockAdminSubscriptionStorage) ListAdminSubscriptions(ctx context.Context, options *mysql.ListOptions) ([]*notification.Subscription, int, int64, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "ListAdminSubscriptions", ctx, options)
	ret0, _ := ret[0].([]*notification.Subscription)
	ret1, _ := ret[1].(int)
	ret2, _ := ret[2].(int64)
	ret3, _ := ret[3].(error)
	return ret0, ret1, ret2, ret3
}

// ListAdminSubscriptions indicates an expected call of ListAdminSubscriptions.
func (mr *MockAdminSubscriptionStorageMockRecorder) ListAdminSubscriptions(ctx, options any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ListAdminSubscriptions", reflect.TypeOf((*MockAdminSubscriptionStorage)(nil).ListAdminSubscriptions), ctx, options)
}

// UpdateAdminSubscription mocks base method.
func (m *MockAdminSubscriptionStorage) UpdateAdminSubscription(ctx context.Context, e *domain.Subscription) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "UpdateAdminSubscription", ctx, e)
	ret0, _ := ret[0].(error)
	return ret0
}

// UpdateAdminSubscription indicates an expected call of UpdateAdminSubscription.
func (mr *MockAdminSubscriptionStorageMockRecorder) UpdateAdminSubscription(ctx, e any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "UpdateAdminSubscription", reflect.TypeOf((*MockAdminSubscriptionStorage)(nil).UpdateAdminSubscription), ctx, e)
}
