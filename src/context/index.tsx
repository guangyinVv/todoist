import React, { ReactNode } from 'react'
import { useState } from 'react'

// 注意：这个selectedProject是个id
export interface SelectedProjectContextType {
  selectedProject: string
  setSelectedProject: (value: string) => void
}

// 全局注册selectedProject
export const SelectedProjectContext =
  React.createContext<SelectedProjectContextType | null>(null)

export const SelectedProjectProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [selectedProject, setSelectedProject] = useState<string>('')
  return (
    <SelectedProjectContext.Provider
      value={{
        selectedProject,
        setSelectedProject
      }}
    >
      {children}
    </SelectedProjectContext.Provider>
  )
}

// export const useSelectedProjectValue = () => useContext(SelectedProjectContext)
