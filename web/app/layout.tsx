import './global.css';
import { UiLayout } from '@/components/ui/ui-layout';
import { ClusterProvider } from '@/components/cluster/cluster-context';
import { SolanaProvider } from '@/components/solana/solana-provider';
import { Provider } from './provider';

export const metadata = { title: 'hawksight-frontend-exam' };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <ClusterProvider>
            <SolanaProvider>
              <UiLayout>{children}</UiLayout>
            </SolanaProvider>
          </ClusterProvider>
        </Provider>
      </body>
    </html>
  );
}
