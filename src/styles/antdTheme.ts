import type { ThemeConfig } from 'antd'

export const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: '#00D4FF',
    colorSuccess: '#10B981',
    colorText: '#FFFFFF',
    colorTextSecondary: '#A0AEC0',
    colorBgBase: '#0A0E27',
    colorBgContainer: '#1A1F3A',
    colorBorder: '#2D3748',
    borderRadius: 8,
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    fontSize: 14
  },
  components: {
    Drawer: {
      colorBgElevated: '#0A0E27',
      colorBorderSecondary: '#2D3748'
    },
    Input: {
      colorBgContainer: '#1A1F3A',
      colorBorder: '#2D3748',
      colorText: '#FFFFFF',
      colorTextPlaceholder: '#718096',
      activeBorderColor: '#00D4FF',
      hoverBorderColor: '#00D4FF',
      colorIcon: '#FFFFFF'
    },
    Button: {
      colorBgContainer: '#1A1F3A',
      colorBorder: '#2D3748',
      colorText: '#A0AEC0',
      colorPrimaryHover: '#00D4FF',
      colorPrimaryActive: '#00D4FF'
    },
    Table: {
      colorBgContainer: '#0A0E27',
      colorTextHeading: '#00D4FF',
      colorBorderSecondary: '#2D3748',
      headerBg: '#0A0E27'
    },
    Alert: {
      colorErrorBg: '#1A1F3A',
      colorErrorBorder: '#EF4444',
      colorError: '#EF4444',
      colorText: '#FFFFFF',
      colorTextHeading: '#FFFFFF',
      colorBgContainer: '#1A1F3A'
    },
    Select: {
      colorBgContainer: '#1A1F3A',
      colorBorder: '#2D3748',
      colorText: '#FFFFFF',
      colorTextPlaceholder: '#718096',
      activeBorderColor: '#00D4FF',
      hoverBorderColor: '#00D4FF',
      colorIcon: '#FFFFFF'
    }
  }
}
